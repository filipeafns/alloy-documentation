// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Alloy Docs',
  tagline: 'Welcome to the Alloy Automation documentation',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'alloyautomation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/filipeafns/alloy-documentation/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'AlloyAutomation Docs',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'embeddedSidebar',
          position: 'left',
          label: 'Embedded',
        },
        {
          type: 'docSidebar',
          sidebarId: 'unifiedApiSidebar',
          position: 'left',
          label: 'UnifiedAPI',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Alloy Embedded',
          items: [
            {
              label: 'Learn More',
              to: '#',
            },
            {
              label: 'Guides',
              to: '#',
            },
            {
              label: 'API',
              to: '#',
            },
          ],
        },
        {
          title: 'Alloy Embedded',
          items: [
            {
              label: 'Learn More',
              to: '#',
            },
            {
              label: 'Guides',
              to: '#',
            },
            {
              label: 'API',
              to: '#',
            },
          ],
        },
        {
          title: 'Pupular Apps',
          items: [
            {
              label: 'NetSuite',
              to: '#',
            },
            {
              label: 'Salesforce',
              to: '#',
            },
            {
              label: 'Quickbooks',
              to: '#',
            },
          ],
        },
        {
          title: 'About Alloy',
          items: [
            {
              label: 'Company',
              to: '#',
            },
          ],
        },
        // ... other footer links ...
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alloy Automation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell'],
    },
  },
};

export default config;
