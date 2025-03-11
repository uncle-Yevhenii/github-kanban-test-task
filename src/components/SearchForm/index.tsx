'use client';

import { Input, Button, Flex } from '@chakra-ui/react';
import { CircleDot } from 'lucide-react';
import { useState } from 'react';

import { parseGithubUrl, fetchRepoIssues } from '@/services/githubService';
import { useKanbanStore } from '@/store/kanbanStore';
import { toaster } from '@/components/ui/toaster';
import { TOASTER } from '@/constants/toaster';

const { INVALID_URL, FAILED_LOAD, LOADED_ISSUES } = TOASTER;

export const SearchForm = ({ children }: { children: React.ReactNode }) => {
  const [url, setUrl] = useState('');

  const { setIssues, setRepoInfo, setLoading, setError } = useKanbanStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsedRepo = parseGithubUrl(url);
    if (!parsedRepo) {
      toaster.create(INVALID_URL());
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const { owner, repo } = parsedRepo;
      const { issues, stars } = await fetchRepoIssues(owner, repo);

      setRepoInfo({ ...parsedRepo, stars });
      setIssues(url, issues);

      toaster.create(LOADED_ISSUES(issues.length, owner, repo));
    } catch (error) {
      console.error(error);
      setError('Failed to load issues from GitHub');

      toaster.create(FAILED_LOAD());
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex mb="4" align="center" justify="space-between">
      <Flex as="form" w="75%" align="center" gap="2" onSubmit={handleSubmit}>
        <Input size="lg" placeholder="Enter repo URL" value={url} onChange={(e) => setUrl(e.target.value)} />

        <Button size="lg" type="submit">
          <CircleDot />
          Load issues
        </Button>
      </Flex>

      {children}
    </Flex>
  );
};
