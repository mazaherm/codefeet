const siteMetadata = {
  title: `Codefeet`,
  description: `My coding blog`,
  image: `/images/codefeet-logo.png`,
  siteUrl: `https://codefeet.com`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  githubUsername: `mazaherm`,
  authorName: `Mazaher Muraj`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `600`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `/images/codefeet-logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@atomic': 'src/components/atomic',
          '@styles': 'src/styles',
          '@hooks': 'src/hooks',
          '@pages': 'src/pages',
          '@templates': 'src/templates',
          '@images': 'src/images',
          '@utils': 'src/utils',
          '@config': 'src/config',
        },
        extensions: [
          "js",
        ],
      }
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
  ],
};