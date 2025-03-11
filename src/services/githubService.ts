import { Octokit } from 'octokit';

import { Issue, RepoInfo } from '@/types';

const accessToken = process.env.GITHUB_ACCESS_TOKEN;

export const parseGithubUrl = (url: string): RepoInfo | null => {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/').filter(Boolean);

    if (urlObj.hostname !== 'github.com' || pathParts.length < 2) return null;

    return {
      owner: pathParts[0],
      repo: pathParts[1],
      url,
    };
  } catch {
    return null;
  }
};

export const fetchRepoIssues = async (
  owner: string,
  repo: string,

  maxIssues: number = 100
): Promise<{ issues: Issue[]; stars: number }> => {
  const octokit = new Octokit({ auth: accessToken });

  const repoData = await octokit.rest.repos.get({
    owner,
    repo,
  });

  const issues = [];
  let page = 1;
  let hasMore = true;

  while (hasMore && issues.length < maxIssues) {
    console.log(`Fetching page ${page} of issues...`);

    try {
      const response = await octokit.rest.issues.listForRepo({
        owner,
        repo,
        state: 'all',
        per_page: 100,
        page,
      });

      if (response.data.length === 0) {
        hasMore = false;
      } else {
        const filteredIssues = response.data.filter((issue) => !('pull_request' in issue));
        issues.push(...filteredIssues);

        if (issues.length >= maxIssues) {
          console.log(`Reached maximum number of issues (${maxIssues})`);
          issues.splice(maxIssues);
          hasMore = false;
        }

        page++;
      }
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      hasMore = false;
    }
  }

  return {
    issues: issues as Issue[],
    stars: repoData.data.stargazers_count,
  };
};
