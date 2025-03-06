import { Button } from '@chakra-ui/react';
import { LogOut } from 'lucide-react';

import { signOut } from '@/auth';

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button variant="surface" type="submit">
        <LogOut />
        Log out
      </Button>
    </form>
  );
}
