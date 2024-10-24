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
        <BannerSpacer>
          <Banner>
            <Name>Phil Cunliffe</Name>
            <Description>takes notes on web-development, fatherhood, knowledge management, and digital minimalism</Description>
            <Currently>Currently Front-End Engineering at Amazon</Currently>
          </Banner>
        </BannerSpacer>
        <GardenHeader>
          <GardenTitle>Essays &amp; Notes</GardenTitle>
          <p className='description'>Learn more about ditigal gardens from <a href='https://maggieappleton.com/garden-history'>Maggie Appleton</a></p>
        </GardenHeader>
        <GardenSection>
          <NoteSection />
          <HighlightSection />
        </GardenSection>
      </Layout>
      { /* Footer */}
    </React.Fragment>
  )
}

const BannerSpacer = styled.div`
min-height: 75vh;
grid-column: 1 / 12;
`

const Name = styled.h1`
font-family: "Londrina Shadow", sans-serif;
font-weight: 400;
font-style: normal;
font-size: var(--step-6);
`;

const Description = styled.p`
margin-top: calc(-1 * var(--space-s));
font-family: "Koh Santepheap", serif;
font-weight: 400;
font-style: normal;
font-size: var(--step-2);
`;

const Currently = styled.p`
padding-top: var(--space-m);
font-family: "Quicksand", sans-serif;
font-optical-sizing: auto;
font-weight: 400;
font-style: normal;
`;

const Banner = styled.div`
padding-top: var(--space-3xl);
padding-bottom: var(--space-3xl);
display: grid;
max-width: 1000px;
`

const GardenSection = styled.div`
display: grid;
grid-column-start: 1;
grid-column-end: 12;

grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto;
grid-template-areas:
  "notes notes highlights"
`

const GardenTitle = styled.h2`
font-size: var(--step-3);
`;

const GardenHeader = styled.div`
display: grid;
grid-column-start: 1;
grid-column-end: 12;
`

export const Head = () => <Seo title="Home Page" />
export default IndexPage
