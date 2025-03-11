import { SessionProvider } from 'next-auth/react';
import { Box, Flex } from '@chakra-ui/react';

import { RepositoryLink } from '@/components/RepositoryLink';
import { BreadcrumbRepo } from '@/components/SearchForm/BreadcrumbRepo';
import { KanbanBoard } from '@/components/KanbanBoard';
import { SearchForm } from '@/components/SearchForm';
import { Toaster } from '@/components/ui/toaster';

export default async function Home() {
  return (
    <Box p="4" h="100vh" w="100vw">
      <SessionProvider>
        <SearchForm>
          <Flex w="25%" align="center" justify="center" gapX="10">
            <RepositoryLink />
          </Flex>
        </SearchForm>
        <BreadcrumbRepo />
        <KanbanBoard />
        <Toaster />
      </SessionProvider>
    </Box>
  );
}
