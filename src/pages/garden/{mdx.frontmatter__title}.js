import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import styled from "styled-components";
// import BackButton from "../../components/back-button";
// import { navigate } from "gatsby";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title} showHeader={true}>
      <ReadingLayout>
        {/* <StyledBackButton onClick={() => navigate("/")} /> */}
        <LimitedWidth>{children}</LimitedWidth>
      </ReadingLayout>
    </Layout>
  );
};

const ReadingLayout = styled.div`
  grid-column: 2 / 12;
  display: grid;
  grid-template-columns: 1fr min(72ch, 100%) 1fr;
  padding-top: 5vh;
  font-size: var(--step-0);
`;

// const StyledBackButton = styled(BackButton)`
//   grid-column: 1;
//   height: var(--step-3);
//   justify-self: end;
//   margin: var(--space-2xs) var(--space-2xs) 0 0;
//   cursor: pointer;
// `;

const LimitedWidth = styled.div`
  grid-column: 2;

  h1 {
    font-weight: 900;
    font-size: var(--step-3);
  }

  h2 {
    font-size: var(--step-2);
  }

  h1,
  h2 {
    letter-spacing: -1px;
  }

  h4 {
    font-weight: 300;
  }

  hr {
    margin: var(--space-xl) 0;
  }

  p {
    line-height: 200%;
    letter-spacing: 0.3px;
    font-weight: 400;
    margin: var(--space-m) 0;
  }

  p:first-of-type::first-letter {
    font-size: 5.2rem;
    font-weight: 600;
    float: left;
    margin: 0.4rem 0.5rem 0 0;
    line-height: 0.9;
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
