import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import NoteSection from '../components/note-section'
import { useStaticQuery } from 'gatsby'
import HighlightSection from '../components/highlight-section'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      { /* NavBar */}
      <Layout pageTitle="Home Page">
        <h1>Phil Cunliffe</h1>
        <p className="description">takes notes on web-development, fatherhood, knowledge management, and digital minimalism</p>
        <div className='digital-garden'>
          <h2>Digital Garden</h2>
          <p className='description'>Learn more about ditigal gardens from <a href=''>Maggie Appleton</a></p>
          <NoteSection />
          <HighlightSection />
        </div>
      </Layout>
      { /* Footer */}
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Home Page" />
export default IndexPage
