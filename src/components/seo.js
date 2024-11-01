import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title, description, image, siteUrl }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  return (
    <>
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content={description || data.site.siteMetadata.description}
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${data.site.siteMetadata.siteUrl}/${siteUrl ? siteUrl : ""}`}
      />
      <meta
        property="og:title"
        content={`${title} | ${data.site.siteMetadata.title}`}
      />
      <meta
        property="og:description"
        content={description || data.site.siteMetadata.description}
      />
      <meta
        property="og:image"
        content={`${data.site.siteMetadata.siteUrl}/${image || data.site.siteMetadata.image}`}
      />

      <meta property="twitter:card" content="summary" />
      <meta
        property="twitter:url"
        content={`${data.site.siteMetadata.siteUrl}/${siteUrl ? siteUrl : ""}`}
      />
      <meta
        property="twitter:title"
        content={`${title} | ${data.site.siteMetadata.title}`}
      />
      <meta
        property="twitter:description"
        content={description || data.site.siteMetadata.description}
      />
      <meta
        property="twitter:image"
        content={`${data.site.siteMetadata.siteUrl}/${image || data.site.siteMetadata.image}`}
      />
    </>
  );
};

export default Seo;
