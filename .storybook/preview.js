/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    repositoryUrl: "https://github.com/jakub188/storybook-stackblitz",
    branch: "master",
  },
};

export default preview;
