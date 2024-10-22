import * as React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

const Layout = ({ pageTitle, children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledLayout>
        {children}
      </StyledLayout>
    </React.Fragment>
  )
}

// Credit to Maggie Appleton for Layout styling
const StyledLayout = styled.main`
  max-width: 1400px;
  margin: var(--space-l) auto var(--space-128);
  padding: 0 var(--space-l);
  @media (max-width: 768px) {
      margin: var(--space-s) auto var(--space-2xl);
      padding: 0 var(--space-m);
  }
  @media (max-width: 576px) {
      margin: var(--space-xs) auto var(--space-xl);
      padding: 0 var(--space-xs);
  }
`;

export default Layout
