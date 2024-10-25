import remarkObsidian from "@thecae/remark-obsidian";
import { dirname } from "path";
import { fileURLToPath } from "url";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkWikiLinkPlus from "remark-wiki-link-plus";
import slugify from "@sindresorhus/slugify";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  siteMetadata: {
    siteUrl: "https://www.philcunliffe.dev",
    title: "Phil Cunliffe",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          // `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [
            remarkFrontmatter,
            remarkGfm,
            [
              remarkWikiLinkPlus,
              {
                hrefTemplate: (permalink) => `/garden/${slugify(permalink)}`,
                // markdownFolder: `${__dirname}/garden`,
              },
            ],
            remarkObsidian,
          ],
        },
      },
    },
    "gatsby-plugin-mdx-source-name",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `notes`,
        path: `${__dirname}/garden/notes`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `highlights`,
        path: `${__dirname}/garden/highlights`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Londrina Shadow`,
            file: `https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap`,
          },
          {
            name: `Koh Santepheap`,
            file: `https://fonts.googleapis.com/css2?family=Koh+Santepheap:wght@100;300;400;700;900`,
          },
          {
            name: `Quicksand`,
            file: `https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
