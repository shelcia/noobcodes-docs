const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Hello Folks",
  tagline:
    "This website has got selective interview questions picked from various sources.",
  // url: "https://your-docusaurus-test-site.com",
  // baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  url: "https://noobcodes-docs.netlify.app/", // Your website URL
  baseUrl: "/",
  projectName: "Noobcodes",
  organizationName: "Noobcodes",
  trailingSlash: false,
  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "interview, preparation, python, java, data structures, algorithm, amazon, atlassian, meta, facebook,  leetcode, leetcode solutions",
      },
    ],
    prism: {
      theme: require("prism-react-renderer/themes/nightOwl"),
    },
    navbar: {
      title: "Noobcodes",
      logo: {
        alt: "Noobcodes Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Programs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/shelcia/noobcodes-docs",
          label: "GitHub",
          position: "right",
        },
        // { search: true },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/gA5gRV2vF2",
            },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/shelciadavid",
            // },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/shelcia/noobcodes-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Noobcodes Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleAnalytics: {
          trackingID: "G-E02ZGV8TT4",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/shelcia/noobcodes-docs/edit/master",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/shelcia/noobcodes-docs/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap",
    "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
  ],
};
