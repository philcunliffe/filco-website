import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import styled from "styled-components";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <ReadingLayout>
        <LimitedWidth>{children}</LimitedWidth>
      </ReadingLayout>
    </Layout>
  );
};

const ReadingLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr min(72ch, 100%) 1fr;
  font-size: var(--step-0);
`;

const LimitedWidth = styled.div`
  grid-column: 2;

  h1 {
    font-weight: 900;
  }

  h1::after {
    display: inline-block;
    content: "";
    border-top: 0.3rem solid var(--mud-brown-700);
    width: 100%;
    transform: translateY(-1rem);
  }

  h1,
  h2 {
    letter-spacing: -1px;
  }

  p {
    line-height: 200%;
    letter-spacing: 0.3px;
    font-weight: 400;
    margin: var(--space-m) 0;
  }
`;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
