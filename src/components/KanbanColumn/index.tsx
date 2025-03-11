import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { Card } from '@chakra-ui/react';
import { Circle } from 'lucide-react';

import { SortableIssueCard } from '@/components/SortableIssueCard';
import { Issue } from '@/types';

type KanbanColumnProps = {
  id: string;
  title: string;
  desc: string;
  stroke: string;
  issues: Issue[];
};

export const KanbanColumn = ({ id, title, issues, desc, stroke }: KanbanColumnProps) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <Card.Root
      flex="1"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      minH="calc(100vh - 200px)"
      maxH="calc(100vh - 200px)"
      overflowY="auto"
    >
      <Card.Header mb="4">
        <Card.Title display="flex" alignItems="center" gap="2" mb="2">
          <Circle stroke={stroke} /> {title}
        </Card.Title>
        <Card.Description>{desc}</Card.Description>
      </Card.Header>

      <SortableContext items={issues.map((issue) => `${id}-${issue.id}`)} strategy={verticalListSortingStrategy}>
        <div ref={setNodeRef}>
          {issues.map((issue) => (
            <SortableIssueCard key={`${id}-${issue.id}`} id={`${id}-${issue.id}`} issue={issue} />
          ))}
        </div>
      </SortableContext>
    </Card.Root>
  );
};
