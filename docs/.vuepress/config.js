module.exports = {
  title: 'Documentation Center',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/animate.css@^4.0.0/animate.min.css'
    }],
    ['script', {
      id: 'ze-snippet',
      src: 'https://static.zdassets.com/ekr/snippet.js?key=1a5ac733-fac6-4769-9091-f47005c3893d',
      async: true
    }]
  ],
  themeConfig: {
    logo: '/assets/rakwireless/rak-blue-dark.svg',
    repo: 'RAKwirelessDev/rakwireless-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    smoothScroll: true,
    selectText: 'Languages',
    label: 'English',
    editLinkText: 'Edit this page in GitHub',
    lastUpdated: 'Last Updated',
    sidebar: require('./includes/sidebar.js'),
    nav: require('./includes/nav.js'),
    pageFooter: [
      '© 2014-2020 Shenzhen RAKwireless Technology Co., Ltd.',
      'All rights reserved. 粤ICP备16112976号'
    ],
    searchMaxSuggestions: 5,

    sidebarDepth: 4,
    displayAllHeaders: true,
    activeHeaderLinks: false // handled by quasar theme
  },
  plugins: {
    'sitemap': {
      hostname: 'https://docs.rakwireless.com/'
    },
    'redirect': {
      locales: true,
    },
    'robots': {
      host: "https://docs.rakwireless.com/",
      sitemap: "/sitemap.xml",
      policies: [{
        userAgent: '*',
        disallow: [
          '/'
        ],
        allow: []
      }]
    },
    // '@vuepress/medium-zoom': {
    //   selector: '.zoomable',
    //   delay: 200,
    //   options: {},
    // },
    // '@vuepress/back-to-top': {},
    'vuepress-plugin-code-copy': {
      selector: 'div[class*="language-"] pre',
      align: 'top',
      color: '#ffffff',
      backgroundTransition: true,
      backgroundColor: '#ffffff',
      successText: 'Copied!'
    },
  },
  markdown: {
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'), 'docs')
    }
  },
  host: 'localhost',
  extraWatchFiles: [
    '.vuepress/**/*.js'
    // '.vuepress/**/*.vue',
  ]
}