import * as React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledLayout className="u-container u-grid">{children}</StyledLayout>
      <Footer />
    </React.Fragment>
  );
};

const StyledLayout = styled.main`
  padding: var(--space-l) var(--space-xl) var(--space-xl);
`;

export default Layout;
