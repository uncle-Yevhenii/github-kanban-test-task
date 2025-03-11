import { Text, Flex, Avatar, Card } from '@chakra-ui/react';

import { Issue } from '@/types';

type IssueCardProps = {
  issue: Issue;
  isDragging?: boolean;
};

export const IssueCard = ({ issue, isDragging = false }: IssueCardProps) => {
  const createdDate = new Date(issue.created_at);

  return (
    <Card.Root
      p="3"
      mb="2"
      borderWidth="1px"
      borderRadius="md"
      boxShadow={isDragging ? 'md' : 'sm'}
      opacity={isDragging ? 0.6 : 1}
      cursor="grab"
    >
      <Card.Header fontWeight="bold" mb={2}>
        {issue.title}
      </Card.Header>
      <Card.Body>
        <Flex align="center" h="40px" justify="space-between">
          <Text fontSize="sm">
            #{issue.number} opened {createdDate.toLocaleDateString()}
          </Text>

          {issue.assignee && (
            <Avatar.Root size="md">
              <Avatar.Fallback name={issue.assignee.login} />
              <Avatar.Image src={issue.assignee.avatar_url} />
            </Avatar.Root>
          )}
        </Flex>

        <Flex my="5px" fontSize="sm" align="center" justify="space-between">
          <Text>Created by:</Text>
          <Text as="span" fontStyle="italic">
            {issue.user.login}
          </Text>
        </Flex>

        <Flex fontSize="sm" align="center" justify="space-between">
          <Text>Total comments:</Text>
          <Text as="span" fontStyle="italic">
            {issue.comments}
          </Text>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};
