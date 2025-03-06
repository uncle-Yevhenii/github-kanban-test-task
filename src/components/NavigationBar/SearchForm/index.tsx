'use client';

import { Input, Button, Flex, Box } from '@chakra-ui/react';
import { CircleDot } from 'lucide-react';

import { handleFormSubmit } from './formAction';

export function SearchForm() {
  return (
    <Box as="div" w="75%">
      <form action={handleFormSubmit}>
        <Flex justify="space-between" align="center" gap="4">
          <Input name="url" placeholder="Enter your Git Hub repository link..." />
          <Button variant="surface" type="submit">
            <CircleDot />
            Load issues
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
