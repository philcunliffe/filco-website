import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import NoteSection from "../components/note-section";
import { Link, useStaticQuery } from "gatsby";
import HighlightSection from "../components/highlight-section";
import styled from "styled-components";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Layout pageTitle="Home Page">
        <BannerSpacer>
          <Banner>
            <Name>
              Phil Cunliffe<Link to="/about">?</Link>
            </Name>
            <Description>
              takes notes on web-development, fatherhood,
              <br /> and digital minimalism
            </Description>
            <Currently>Currently Front-End Engineering at Amazon</Currently>
          </Banner>
        </BannerSpacer>
        <GardenHeader>
          <GardenTitle>Essays &amp; Notes</GardenTitle>
          <p className="description">
            Learn more about ditigal gardens from{" "}
            <a href="https://maggieappleton.com/garden-history">
              Maggie Appleton
            </a>
          </p>
        </GardenHeader>
        <GardenSection>
          <NoteSection />
          <HighlightSection />
        </GardenSection>
      </Layout>
    </React.Fragment>
  );
};

const BannerSpacer = styled.div`
  min-height: 73vh;
  grid-column: 1 / 12;
`;

const Name = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Londrina Shadow", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: var(--step-6);

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--step-0);
    width: 1.2em;
    height: 1.2em;
    transform: translateY(calc(-1 * var(--step-3))) rotate(10deg);
    border: 1px solid var(--jade-700);
    border-width: 1px 2px 2px 1px;
    border-radius: 0.5em 0.6em;
  }
`;

const Description = styled.p`
  padding: 0;
  margin: calc(-1 * var(--space-s)) 0 0 0;
  font-family: "Koh Santepheap", serif;
  font-weight: 400;
  font-style: normal;
  font-size: var(--step-2);
`;

const Currently = styled.p`
  padding: var(--space-m) 0 0 0;
  margin: 0;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
`;

const Banner = styled.div`
  padding-top: var(--space-3xl);
  padding-bottom: var(--space-3xl);
  display: grid;
  max-width: 1000px;
`;

const GardenSection = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 12;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "essays essays highlights"
    "notes notes highlights";
`;

const GardenTitle = styled.h2`
  font-size: var(--step-3);
`;

const GardenHeader = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 12;
`;

export const Head = () => <Seo title="Home" />;
export default IndexPage;
