module.exports = {
  stories: ["../src/**/*.stories.(js|mdx|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        tsDocgenLoaderOptions: {}
      }
    }
  ]
};
