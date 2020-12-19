const siteMetadata = {
  title: `Code feet`,
  description: `Don't get cold feet, get codefeet!`,
  image: `/assets/cf.svg`,
  siteUrl: `https://codefeet.com`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  githubUsername: `mazaherm`,
  authorName: `Mazaher Muraj`,
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300", "400", "500", "600"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/assets/cf.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@atomic": "src/components/atomic",
          "@styles": "src/styles",
          "@hooks": "src/hooks",
          "@pages": "src/pages",
          "@templates": "src/templates",
          "@assets": "src/assets",
          "@utils": "src/utils",
          "@config": "src/config",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content/posts`, name: `posts` },
    },
    {
      resolve: "gatsby-remark-emojis",
      options: {
        // Deactivate the plugin globally (default: true)
        active: true,
        // Add a custom css class
        class: "emoji-icon",
        // In order to avoid pattern mismatch you can specify
        // an escape character which will be prepended to the
        // actual pattern (e.g. `#:poop:`).
        escapeCharacter: "#", // (default: '')
        // Select the size (available size: 16, 24, 32, 64)
        size: 64,
        // Add custom styles
        styles: {
          display: "inline",
          margin: "0",
          "margin-top": "1px",
          position: "relative",
          top: "5px",
          width: "25px",
        },
      },
    },
  ],
};
