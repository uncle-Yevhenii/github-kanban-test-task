export type Issue = {
  body: string;
  id: number;
  number: number;
  title: string;
  state: string;
  assignee: {
    login: string;
    avatar_url: string;
  } | null;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
};

export type RepoInfo = {
  owner: string;
  repo: string;
  url: string;
  stars?: number;
};

export type Column = {
  id: string;
  title: string;
};

export type KanbanState = {
  [repoUrl: string]: {
    [columnId: string]: Issue[];
  };
};
