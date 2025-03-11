import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { IssueCard } from '@/components/IssueCard';
import { Issue } from '@/types';

type SortableIssueCardProps = {
  id: string;
  issue: Issue;
};

export const SortableIssueCard = ({ id, issue }: SortableIssueCardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <IssueCard issue={issue} isDragging={isDragging} />
    </div>
  );
};
