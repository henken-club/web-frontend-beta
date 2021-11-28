module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  core: {
    builder: "storybook-builder-vite",
  },
  framework: "@storybook/react",
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "storybook-addon-next-router",
  ],
  async viteFinal(config) {
    config.plugins = [
      ...config.plugins,
      require("vite-tsconfig-paths").default(),
    ];
    return config;
  },
};
