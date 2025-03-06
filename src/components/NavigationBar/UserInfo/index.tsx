import { Flex, Text, Avatar } from '@chakra-ui/react';

import { SignOut } from '../SignOut';

export type UserProps = {
  name: string;
  image: string;
};

export function UserInfo({ name, image }: UserProps) {
  return (
    <Flex justify="space-between" gap="4">
      <Flex align="center" gap="2">
        <Avatar.Root size="xs">
          <Avatar.Fallback name={name} />
          <Avatar.Image src={image} />
        </Avatar.Root>

        <Text>{name}</Text>
      </Flex>

      <SignOut />
    </Flex>
  );
}
