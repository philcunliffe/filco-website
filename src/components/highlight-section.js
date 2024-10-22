import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Note from './note'

const HighlightSection = () => {
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
    <div>
      {
        data.allMdx.nodes.map((node) => (
          <Note title={node.frontmatter.title} stage={node.frontmatter.stage} />
        ))
      }
    </div>
  )
}

export default HighlightSection; 
