import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Note from './note'
import styled from 'styled-components';

const NoteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {fields: {source: {eq: "notes"}}}) {
        nodes {
          frontmatter {
            title
            stage
            planted
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
        {
          data.allMdx.nodes.map((node) => (
            <Note title={node.frontmatter.title} stage={node.frontmatter.stage} />
          ))
        }
      </FlexBox>
    </StyledNoteSection>
  )
}

const StyledNoteSection = styled.div`
grid-area: notes;
`

const FlexBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: left;
align-items: flex-start;
padding-top: var(--space-s);
row-gap: var(--space-s);
column-gap: var(--space-s);
`

export default NoteSection
