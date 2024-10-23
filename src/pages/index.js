import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import NoteSection from '../components/note-section'
import { useStaticQuery } from 'gatsby'
import HighlightSection from '../components/highlight-section'
import styled from 'styled-components'

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
        <Banner>
          <h1>Phil Cunliffe</h1>
          <p className="description">takes notes on web-development, fatherhood, knowledge management, and digital minimalism</p>
        </Banner>
        <GardenHeader>
          <h2>Digital Garden</h2>
          <p className='description'>Learn more about ditigal gardens from <a href=''>Maggie Appleton</a></p>
        </GardenHeader>
        <NoteSection />
        <HighlightSection />
      </Layout>
      { /* Footer */}
    </React.Fragment>
  )
}

const Banner = styled.div`
display: grid;
grid-column-start: 1;
grid-column-end: 12;
`

const Garden = styled.div`
display: grid;
grid-column-start: 1;
grid-column-end: 12;
`

const GardenHeader = styled.div`
display: grid;
grid-column-start: 1;
grid-column-end: 12;
`

export const Head = () => <Seo title="Home Page" />
export default IndexPage
