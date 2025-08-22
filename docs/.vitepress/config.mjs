import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Javier's VitePress Demo",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Kitchen Sink', link: '/kitchen-sink' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Kitchen Sink', link: '/kitchen-sink' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jhonkaman/vitepress-portfolio' }
    ]
  }
})
