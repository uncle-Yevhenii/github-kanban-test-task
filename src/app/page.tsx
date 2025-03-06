import { Box } from '@chakra-ui/react';

import { Toaster } from '@/components/ui/toaster';
import { IssueBoard } from '@/components/IssueBoard';

export default function Home() {
  return (
    <Box>
      <IssueBoard />

      <Toaster />
    </Box>
  );
}
