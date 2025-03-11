export const TOASTER_TYPES = {
  ERROR: 'error',
  SUCCESS: 'success',
};

export const TOASTER_DURATION = 3000;

export const TOASTER = {
  INVALID_URL: () => ({
    title: 'Invalid URL',
    description: 'Please enter a valid GitHub repository URL',
    type: TOASTER_TYPES.ERROR,
    duration: TOASTER_DURATION,
  }),

  FAILED_LOAD: () => ({
    title: 'Error',
    description: 'Failed to load issues from GitHub',
    type: TOASTER_TYPES.ERROR,
    duration: TOASTER_DURATION,
  }),

  LOADED_ISSUES: (length: number, owner: string, repo: string) => ({
    title: 'Success',
    description: `Loaded ${length} issues from ${owner}/${repo}`,
    type: TOASTER_TYPES.SUCCESS,
    duration: TOASTER_DURATION,
  }),
};
