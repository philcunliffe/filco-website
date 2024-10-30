import * as React from "react";
import styled from "styled-components";
import Socials from "./socials";

const Footer = () => {
  return (
    <Container>
      <GridContainer className="u-container u-grid">
        <Socials />
      </GridContainer>
    </Container>
  );
};

const Container = styled.footer`
  padding-top: var(--space-s);
  min-height: var(--footer-height);
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
`;

const GridContainer = styled.div`
  padding: 0 var(--space-xl);
`;

export default Footer;
