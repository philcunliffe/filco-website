import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">PC</Link>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: var(--space-s) 0;
  width: 100%;

  a {
    margin-left: var(--space-m);
    font-size: var(--step-3);
    font-family: "Londrina Shadow", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

export default Header;
