import path from 'path';
import type { StorybookConfig } from "@storybook/react-webpack5";
import { RuleSetRule } from 'webpack';


const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ["../src/.mdx", "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/react",
    "@storybook/addon-actions",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        postCss: true,
      },
    },
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      // Find and remove the existing rule for CSS files
      const cssRuleIndex = config.module.rules.findIndex((rule): rule is RuleSetRule => {
        if (typeof rule === 'string') return false;
        if ('test' in rule && rule.test instanceof RegExp) {
          return rule.test.test('.css');
        }
        return false;
      });

      if (cssRuleIndex !== -1) {
        config.module.rules.splice(cssRuleIndex, 1);
      }

      // Add a new rule for CSS files
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        include: path.resolve(__dirname, '../'),
      });
    }
    return config;
  },
  managerHead: () => `
     <style>

      .css-1wmdc3 {
          display: flex;
          align-items: center;
      }
           .css-1rb1jn6 {
          display: flex !important;
          align-items: center;
          height: 40px; 
      }

   
     
        </style>
  `
};

export default config;
