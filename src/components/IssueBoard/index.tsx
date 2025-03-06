import { Grid } from '@chakra-ui/react';
import { Circle } from 'lucide-react';

import { IssueColumn } from './IssueColumn';

const IssueComponents = [
  {
    title: 'TODO',
    desc: 'Mandatory tasks that need to be implemented',
    icon: <Circle stroke="#9e6a03" />,
  },
  {
    title: 'In Progress',
    desc: 'This is actively being worked on',
    icon: <Circle stroke="#1f6feb" />,
  },
  {
    title: 'Done',
    desc: 'This has been completed',
    icon: <Circle stroke="#238636" />,
  },
];

export function IssueBoard() {
  return (
    <Grid p="4" templateColumns="repeat(3, 1fr)" gap="6" h="calc(100vh - 80px)">
      {IssueComponents.map((issue) => (
        <IssueColumn key={issue.title} title={issue.title} desc={issue.desc} icon={issue.icon} />
      ))}
    </Grid>
  );
}
