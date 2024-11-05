import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Highlight from "./highlight";
import styled from "styled-components";

const HighlightSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          frontmatter: {
            note_type: { eq: "highlight" }
            medium: { eq: "books" }
          }
        }
      ) {
        nodes {
          frontmatter {
            title
            cover_url
          }
        }
      }
    }
  `);

  return (
    <StyledHighlightSection>
      <h5>Highlights</h5>
      <FlexBox>
        {data.allMdx.nodes.map((node, index) => (
          <Highlight
            key={`highlight-${index}`}
            title={node.frontmatter.title}
            coverUrl={node.frontmatter.cover_url}
          />
        ))}
      </FlexBox>
    </StyledHighlightSection>
  );
};

const StyledHighlightSection = styled.div`
  grid-column: 9 / 13;
  grid-row: 3 / 5;
  h5 {
    margin: var(--space-xs) 0;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: flex-start;
  row-gap: var(--space-s);
  column-gap: var(--space-s);
  padding-top: var(--space-xs);
`;

export default HighlightSection;
