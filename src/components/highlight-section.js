import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Note from './note'
import Highlight from './highlight';

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
    <div>
      {
        data.allMdx.nodes.map((node) => (
          <Highlight title={node.frontmatter.title} coverUrl={node.frontmatter.cover_url} />
        ))
      }
    </div>
  )
}

export default HighlightSection; 
