# Github Kanban Board

Implement GitHub repo issues viewer as a kanban board

## Requirements

1. User should enter repo URL in the input on top of the page and press "Load". For example:
   `https://github.com/facebook/react`.
2. App loads issues for the repo using Github API.
3. App contains 3 columns:

- ToDo (all new issues)
- In Progress (opened issues with assignee)
- Done (closed issues)

4. User should be able to drag-n-drop between the columns and change the order of issues.
5. Current issue position (column and order) should be stored between search and browser sessions. When the user loads
   issues for Repo1 -> Repo2 -> Repo1 he should see all changes he did for Repo1.
6. User should be able to visit the profile of the owner of the repo and visit the repo as well by links under the
   input.

## Technologies

You should use exactly the listed technologies or one of them if it is allowed:

- React 18 with hooks, no classes
- Typescript
- UI library (on your choice):
  - Ant Design
  - React-Bootstrap
  - Semantic UI
  - Blueprint UI
  - Chakra UI
- State manager (on your choice):
  - Redux (or Redux-Toolkit)
  - MobX
  - Recoil
  - Zustand
- Testing (on your choice):
  - React Testing Library
  - Cypress
  - Vitest
- any other library you need

## Assessment

What will we assess:

- workability: how your application works
- projects structure: how you structure your files
- code quality: how you write clean, readable code (feel free to install and use ESLint and Prettier)
- knowledge of React and its ecosystem: how you compose and use libraries together
- testing: how you can test your code

> **Note**<br /> If you use generative AI to complete the task (partially or completely) it would be nice if you could
> share your thoughts about motivation, experience, and results of using such AI tools.

## Mockups

![Design](./public/design.png)

## How to complete the task

- create a new public repo on Github
- develop the application according to the requirements
- send us the link to your repo

This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically
optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for
more details.
