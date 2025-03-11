import { persist } from 'zustand/middleware';
import { create } from 'zustand';

import { Issue, RepoInfo, KanbanState } from '@/types';

interface KanbanStore {
  kanbanState: KanbanState;
  repoInfo: RepoInfo | null;
  loading: boolean;
  error: string | null;

  setIssues: (_repoUrl: string, _issues: Issue[]) => void;
  moveIssue: (
    _repoUrl: string,
    _source: { column: string; index: number },
    _destination: { column: string; index: number }
  ) => void;
  setRepoInfo: (_repoInfo: RepoInfo) => void;
  setLoading: (_loading: boolean) => void;
  setError: (_error: string | null) => void;
}

export const useKanbanStore = create<KanbanStore>()(
  persist(
    (set, _get) => ({
      kanbanState: {},
      repoInfo: null,
      loading: false,
      error: null,

      setIssues: (repoUrl, issues) => {
        const todoIssues = issues.filter((issue) => issue.state === 'open' && !issue.assignee);
        const inProgressIssues = issues.filter((issue) => issue.state === 'open' && issue.assignee);
        const doneIssues = issues.filter((issue) => issue.state === 'closed');

        set((state) => ({
          kanbanState: {
            ...state.kanbanState,
            [repoUrl]: {
              todo: todoIssues,
              inProgress: inProgressIssues,
              done: doneIssues,
            },
          },
        }));
      },

      moveIssue: (repoUrl, source, destination) => {
        set((state) => {
          const newState = { ...state.kanbanState };
          const repoState = { ...newState[repoUrl] };

          const sourceColumn = [...repoState[source.column]];
          const destColumn = source.column === destination.column ? sourceColumn : [...repoState[destination.column]];

          const [removed] = sourceColumn.splice(source.index, 1);
          destColumn.splice(destination.index, 0, removed);

          if (source.column !== destination.column) {
            repoState[source.column] = sourceColumn;
            repoState[destination.column] = destColumn;
          } else {
            repoState[source.column] = destColumn;
          }

          newState[repoUrl] = repoState;
          return { kanbanState: newState };
        });
      },

      setRepoInfo: (repoInfo) => set({ repoInfo }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: 'github-kanban-storage',
    }
  )
);
