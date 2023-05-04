import type { StorybookConfig } from "@storybook/vue3-webpack5";
import * as path from 'path'
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        sass: {
          implementation: require('sass')
        }
      }
    },
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: any) => {
    config.resolve.alias = { '@': path.resolve(__dirname, '../src'), vue: "vue/dist/vue.esm-bundler.js"}

    config.module.rules.push({
      test: /\.scss$/,
      use: ['sass-loader'], //'style-loader',, 'css-loader'
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
}
export default config
