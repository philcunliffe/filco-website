import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <StyledH1>Under Construction</StyledH1>
    </Layout>
  );
};

const StyledH1 = styled.h1`
  grid-column: 2 / 12;
  text-align: center;
`;

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
