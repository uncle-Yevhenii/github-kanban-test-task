import { parseGithubUrl, fetchRepoIssues } from '@/services/githubService';
import { toaster } from '@/components/ui/toaster';

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

export async function handleFormSubmit(formData: FormData) {
  try {
    const githubUrl = formData.get('url') as string;

    const repoInfo = parseGithubUrl(githubUrl);
    if (!repoInfo) throw new Error('Invalid GitHub URL');

    const repoIssues = await fetchRepoIssues(repoInfo?.owner, repoInfo?.repo, GITHUB_ACCESS_TOKEN);
    console.log(repoIssues);
  } catch (error: unknown) {
    if (error instanceof Error) {
      toaster.create({
        title: error.message,
        type: 'error',
        duration: 3000,
      });
    }
  }
}
