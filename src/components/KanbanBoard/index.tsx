'use client';

import { Flex, Text, Center, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';

import { useKanbanStore } from '@/store/kanbanStore';
import { Issue } from '@/types';

import { KanbanColumn } from '../KanbanColumn';
import { IssueCard } from '../IssueCard';

export const KanbanBoard = () => {
  const { kanbanState, repoInfo, loading, error, moveIssue } = useKanbanStore();

  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeIssue, setActiveIssue] = useState<Issue | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as string);

    const [columnId, issueIdStr] = (active.id as string).split('-');
    const issueId = parseInt(issueIdStr);

    if (repoInfo?.url && kanbanState[repoInfo.url]) {
      const issue = kanbanState[repoInfo.url][columnId].find((item) => item.id === issueId);

      if (issue) {
        setActiveIssue(issue);
      }
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || !active || !repoInfo?.url) {
      setActiveId(null);
      setActiveIssue(null);
      return;
    }

    const [activeColumnId, activeIssueIdStr] = (active.id as string).split('-');
    const [overColumnId, overIssueIdStr] = (over.id as string).split('-');

    const targetColumnId = overIssueIdStr ? overColumnId : (over.id as string);

    const activeIssueId = parseInt(activeIssueIdStr);
    const activeColumnItems = kanbanState[repoInfo.url][activeColumnId];
    const activeIndex = activeColumnItems.findIndex((item) => item.id === activeIssueId);

    if (activeColumnId === targetColumnId) {
      if (overIssueIdStr) {
        const overIssueId = parseInt(overIssueIdStr);
        const overIndex = kanbanState[repoInfo.url][targetColumnId].findIndex((item) => item.id === overIssueId);

        moveIssue(
          repoInfo.url,
          { column: activeColumnId, index: activeIndex },
          { column: targetColumnId, index: overIndex }
        );
      }
    } else {
      let destinationIndex = 0;

      if (overIssueIdStr) {
        const overIssueId = parseInt(overIssueIdStr);
        destinationIndex = kanbanState[repoInfo.url][targetColumnId].findIndex((item) => item.id === overIssueId);
      } else {
        destinationIndex = kanbanState[repoInfo.url][targetColumnId].length;
      }

      moveIssue(
        repoInfo.url,
        { column: activeColumnId, index: activeIndex },
        { column: targetColumnId, index: destinationIndex }
      );
    }

    setActiveId(null);
    setActiveIssue(null);
  };

  if (loading) {
    return (
      <Center h="300px">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center h="300px">
        <Text color="red.500">{error}</Text>
      </Center>
    );
  }

  if (!repoInfo) {
    return (
      <Center h="300px">
        <Text>Please enter a GitHub repository URL to load issues</Text>
      </Center>
    );
  }

  const repoIssuesState = kanbanState[repoInfo.url] || {
    todo: [],
    inProgress: [],
    done: [],
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Flex gap={4}>
        <KanbanColumn
          id="todo"
          title="ToDo"
          desc="Mandatory tasks that need to be implemented"
          stroke="#9e6a03"
          issues={repoIssuesState.todo || []}
        />
        <KanbanColumn
          id="inProgress"
          title="In Progress"
          desc="This is actively being worked on"
          stroke="#1f6feb"
          issues={repoIssuesState.inProgress || []}
        />
        <KanbanColumn
          id="done"
          title="Done"
          desc="This has been completed"
          stroke="#238636"
          issues={repoIssuesState.done || []}
        />
      </Flex>

      <DragOverlay>{activeId && activeIssue ? <IssueCard issue={activeIssue} isDragging={true} /> : null}</DragOverlay>
    </DndContext>
  );
};
