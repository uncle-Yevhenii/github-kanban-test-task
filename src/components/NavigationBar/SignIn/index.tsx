import { Button } from '@chakra-ui/react';
import { Github } from 'lucide-react';

import { signIn } from '@/auth';

export function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github');
      }}
    >
      <Button variant="surface" type="submit">
        <Github /> Sign in with GitHub
      </Button>
    </form>
  );
}
