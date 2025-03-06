import { Button, HStack, Alert } from '@chakra-ui/react';

const Demo = () => {
  return (
    <HStack>
      <Button>Click me</Button>
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Invalid Fields</Alert.Title>
          <Alert.Description>Your form has some errors. Please fix them and try again.</Alert.Description>
        </Alert.Content>
      </Alert.Root>
      <Button>Click me</Button>
    </HStack>
  );
};

export default function Home() {
  return (
    <div>
      Hello
      <Demo />
    </div>
  );
}
