const siteMetadata = {
  title: `Codefeet`,
  description: `My coding blog`,
  image: `/default-site-image.jpg`,
  siteUrl: `https://codefeet.com`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  githubUsername: `mazaherm`,
  authorName: `Mazaher Muraj`,
}

const navBar = {
  allPosts: `All Posts`,
  search: `Search`,
  about: `About`,
}

module.exports = {
  navBar,
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@hooks': 'src/hooks',
          '@pages': 'src/pages',
          '@templates': 'src/templates',
          '@utils': 'src/utils',
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