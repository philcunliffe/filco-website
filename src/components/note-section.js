import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Note from "./note";
import styled from "styled-components";

const NoteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: frontmatter___modified, order: DESC }
        filter: {
          frontmatter: { note_type: { eq: "note" }, publish: { eq: true } }
        }
        limit: 14
      ) {
        nodes {
          frontmatter {
            title
            planted
            stage
            modified
          }
        }
      }
    }
  `);

  return (
    <StyledNoteSection>
      <h5>Notes</h5>
      <FlexBox>
        {data.allMdx.nodes.map((node, index) => (
          <Note
            key={`note-${index}`}
            title={node.frontmatter.title}
            stage={node.frontmatter.stage}
            planted={node.frontmatter.planted}
          />
        ))}
      </FlexBox>
    </StyledNoteSection>
  );
};

const StyledNoteSection = styled.div`
  grid-column: 1 / 9;
  grid-row: 4;
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
  padding-right: var(--space-s);
`;

export default NoteSection;
