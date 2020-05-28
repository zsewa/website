const path = require('path');

module.exports = {
  title: 'Grid.js',
  tagline: 'Advanced table plugin',
  url: 'https://gridjs.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'grid-js',
  projectName: 'website',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-167499954-1',
    },
    navbar: {
      hideOnScroll: true,
      title: 'Grid.js',
      logo: {
        alt: 'Grid.js',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/index',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/grid-js/gridjs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/index',
            },
            {
              label: 'Examples',
              to: 'docs/examples/hello-world',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/gridjs',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/K55BwDY',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/grid_js',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/grid-js/gridjs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Usablica Limited.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        sitemap: {
          cacheTime: 600 * 1000,
          changefreq: 'weekly',
          priority: 0.5,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/grid-js/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/grid-js/website/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [require.resolve('@docusaurus/theme-live-codeblock')],
  plugins: [
    path.resolve(__dirname, './plugins/tailwind')
  ]
};
