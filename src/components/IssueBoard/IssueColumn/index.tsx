import { Box, Flex, Text } from '@chakra-ui/react';

type IssueColumnProps = {
  title: string;
  desc: string;
  icon: React.JSX.Element;
};

export function IssueColumn({ title, desc, icon }: IssueColumnProps) {
  return (
    <Box bg="gray.800" p="4" borderRadius="xl">
      <Box>
        <Flex align="center" gap="2" mb="2">
          {icon}
          <Text textStyle="2xl">{title}</Text>
        </Flex>
        <Text textStyle="md">{desc}</Text>
      </Box>
    </Box>
  );
}
