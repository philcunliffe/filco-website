import * as React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ pageTitle, children, showHeader = false }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {showHeader && <Header />}
      <StyledLayout className="u-container">{children}</StyledLayout>
      <Footer className="u-container"/>
    </React.Fragment>
  );
};

const StyledLayout = styled.main`
  padding: var(--space-l) var(--space-xl) var(--space-xl);
  min-height: calc(100vh - var(--footer-height));
`;

export default Layout;
