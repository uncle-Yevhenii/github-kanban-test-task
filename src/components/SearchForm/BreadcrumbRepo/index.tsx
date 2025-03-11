'use client';

import { Text, Breadcrumb } from '@chakra-ui/react';
import { Star } from 'lucide-react';

import { useKanbanStore } from '@/store/kanbanStore';

export type BreadcrumbRepoProps = {
  owner: string;
  repoName: string;
  repoUrl: string;
  stars: string;
};

export function BreadcrumbRepo() {
  const { repoInfo } = useKanbanStore();

  return (
    <>
      {repoInfo && (
        <Breadcrumb.Root size="lg" mb="10">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link
                href={`https://github.com/${repoInfo.owner}`}
                fontSize="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {repoInfo.owner}
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href={repoInfo.url} fontSize="lg" target="_blank" rel="noopener noreferrer">
                {repoInfo.repo}
              </Breadcrumb.Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
              <Text ml="4" display="flex" alignItems="center" gap="1" fontSize="lg">
                <Star size={16} color="#9e6a03" />
                {repoInfo.stars} stars
              </Text>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      )}
    </>
  );
}
