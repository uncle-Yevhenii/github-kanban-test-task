import { Button, Link } from '@chakra-ui/react';
import { FolderGit2 } from 'lucide-react';

export function RepositoryLink() {
  return (
    <Button variant="surface" size="lg" asChild>
      <Link
        href="https://github.com/uncle-Yevhenii/github-kanban-test-task"
        target="_blank"
        rel="noopener noreferrer"
        variant="plain"
      >
        Repository <FolderGit2 />
      </Link>
    </Button>
  );
}
