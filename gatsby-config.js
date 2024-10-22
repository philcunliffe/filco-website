module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-mdx-source-name",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `notes`,
        path: `${__dirname}/garden/notes`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `highlights`,
        path: `${__dirname}/garden/highlights`,
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
  ],
};
