const path = require("path");
const webpack = require("webpack");
const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: { postcssLoaderOptions: { implementation: require("postcss") } },
    },
    "storybook-addon-next-router",
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TSConfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ];
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /next\/image/,
        path.resolve(__dirname, "../__mocks__/next/image.js"),
      ),
    );
    return config;
  },
};
