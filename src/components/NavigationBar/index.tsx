import { Flex } from '@chakra-ui/react';

import { auth } from '@/auth';

import { RepositoryLink } from './RepositoryLink';
import { SearchForm } from './SearchForm';
import { UserInfo } from './UserInfo';
import { SignIn } from './SignIn';

export async function NavigationBar() {
  const session = await auth();

  return (
    <Flex w="100vw" h="80px" p="4" align="center" justify="space-between">
      <SearchForm />

      <Flex maxW="25%" align="center" justify="center" gap="4">
        {session?.user ? <UserInfo name={session.user.name ?? ''} image={session.user.image ?? ''} /> : <SignIn />}
        <RepositoryLink />
      </Flex>
    </Flex>
  );
}
