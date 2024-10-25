import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Highlight from "./highlight";
import styled from "styled-components";

const HighlightSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fields: { source: { eq: "highlights" } } }) {
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
        {data.allMdx.nodes.map((node) => (
          <Highlight
            title={node.frontmatter.title}
            coverUrl={node.frontmatter.cover_url}
          />
        ))}
      </FlexBox>
    </StyledHighlightSection>
  );
};

const StyledHighlightSection = styled.div`
  display: grid;
  grid-area: highlights;

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
`;

export default HighlightSection;
