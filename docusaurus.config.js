// @ts-check

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quark',
  tagline: 'Documentation for Quark.',
  favicon: 'img/quark-mark.svg',

  url: 'https://aurora-softwares.github.io',
  baseUrl: '/Quark-Docs/',

  organizationName: 'Aurora-Softwares',
  projectName: 'Quark-Docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Aurora-Softwares/Quark-Docs/edit/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/quark-mark.svg',
      metadata: [
        {
          name: 'description',
          content: 'Documentation for Quark.',
        },
      ],
      navbar: {
        title: 'Quark',
        logo: {
          alt: 'Quark mark',
          src: 'img/quark-mark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Aurora-Softwares/Quark-IDE',
            label: 'IDE Repo',
            position: 'right',
          },
          {
            href: 'https://github.com/Aurora-Softwares/Quark-Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Project',
            items: [
              {
                label: 'Quark IDE',
                href: 'https://github.com/Aurora-Softwares/Quark-IDE',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aurora Softwares.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
