import { Input, Button, Flex } from '@chakra-ui/react';
import { CircleDot } from 'lucide-react';

import { auth } from '@/auth';

import { RepositoryLink } from './RepositoryLink';
import { UserInfo } from './UserInfo';
import { SignIn } from './SignIn';

export async function NavigationBar() {
  const session = await auth();

  return (
    <Flex w="100vw" h="80px" p="4" align="center" justify="space-between">
      <Flex as="form" justify="space-between" align="center" w="75%" gap="4">
        <Input placeholder="Enter your email" />
        <Button variant="surface">
          <CircleDot />
          Load issues
        </Button>
      </Flex>

      <Flex maxW="25%" align="center" justify="center" gap="4">
        {session?.user ? <UserInfo name={session.user.name ?? ''} image={session.user.image ?? ''} /> : <SignIn />}
        <RepositoryLink />
      </Flex>
    </Flex>
  );
}
