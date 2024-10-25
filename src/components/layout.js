import * as React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const Layout = ({ pageTitle, children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledLayout className="u-container u-grid">{children}</StyledLayout>
    </React.Fragment>
  );
};

const StyledLayout = styled.main``;

export default Layout;
