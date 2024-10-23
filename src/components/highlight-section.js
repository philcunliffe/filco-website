import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Note from './note'
import Highlight from './highlight';
import styled from 'styled-components';

const HighlightSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {fields: {source: {eq: "highlights"}}}) {
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
      <h4>Recent Highlights</h4>
      <FlexBox>
        {
          data.allMdx.nodes.map((node) => (
            <Highlight title={node.frontmatter.title} coverUrl={node.frontmatter.cover_url} />
          ))
        }
      </FlexBox>
    </StyledHighlightSection>
  )
}

const StyledHighlightSection = styled.div`
display: grid;
grid-column-start: 9;
grid-column-end: 12;
`

const FlexBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
`

export default HighlightSection; 
