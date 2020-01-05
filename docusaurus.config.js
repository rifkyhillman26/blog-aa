/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Asrul Dev',
  tagline: 'Belajar web dan mobile',
  url: 'http://asrul.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-154182296-1',
    },
    navbar: {
      title: 'Asrul Dev',
      logo: {
        alt: 'Asrul Dev',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/30daysweb', label: '30d Js', position: 'right'},
        {to: 'docs/android', label: 'Android', position: 'right'},
        {to: 'blog', label: 'Blog', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/talkasrul',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Series',
          items: [
            {
              label: '30 Hari Javascript',
              to: 'docs/30daysweb',
            },
            {
              label: '1 Minggu Mongo',
              to: 'docs/1wmongo',
            },
            {
              label: 'Android',
              to: 'docs/android',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/asruldev',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/asruldev',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/talkasrul',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/talkasrul',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com/',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Asrul Dev build with Love.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/asruldev/30djs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      'data-ad-client': 'ca-pub-1448095049042566',
      src:
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
    },
  ],
  plugins: [
    '@docusaurus/plugin-sitemap',
    {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: 'weekly',
      priority: 0.5,
    },
  ],
};
