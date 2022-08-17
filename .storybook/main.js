module.exports = {
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  stories: ['../@(common|features|stories)/**/*.stories.@(ts|tsx|mdx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
