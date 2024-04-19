import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'lei-view',
    footer: false,
    nav: [
      {
        title: '指南',
        link: '/guide'
      },
      {
        title: '组件',
        link: '/components'
      }
    ]
  },
});
