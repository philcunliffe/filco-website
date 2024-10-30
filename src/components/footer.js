import * as React from "react";
import styled from "styled-components";
import Socials from "./socials";

const Footer = () => {
  return (
    <Container className={'u-grid'}>
      <Socials />
    </Container>
  );
};

const Container = styled.footer`
  padding: var(--space-s) var(--space-xl);
  min-height: var(--footer-height);
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default Footer;
