import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Essay from "./essay";

const EssaysSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          frontmatter: { note_type: { eq: "essay" }, publish: { eq: true } }
        }
        limit: 1
      ) {
        nodes {
          frontmatter {
            title
            planted
            stage
            modified
          }
          excerpt
        }
      }
    }
  `);

  return (
    <StyledEssaysSection>
      <h5>Essays</h5>
      <FlexBox>
        {data.allMdx.nodes.map((node) => (
          <Essay
            title={node.frontmatter.title}
            stage={node.frontmatter.stage}
            planted={node.frontmatter.planted}
            excerpt={node.excerpt}
          />
        ))}
      </FlexBox>
    </StyledEssaysSection>
  );
};

const StyledEssaysSection = styled.div`
  grid-column: 1 / 9;
  grid-row: 3;

  h5 {
    margin: var(--space-xs) 0;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  row-gap: var(--space-s);
  column-gap: var(--space-s);
  padding-right: var(--space-s);
`;

export default EssaysSection;
