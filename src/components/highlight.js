import * as React from "react";
import { navigate } from "gatsby";
import slugify from "@sindresorhus/slugify";
import styled from "styled-components";

const Highlight = ({ title, coverUrl }) => {
  return (
    <StyledContainer
      className="highlight-card"
      onClick={() => navigate(`/garden/${slugify(title)}`)}
      style={{ backgroundImage: `url(${coverUrl})` }}
    >
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  --section-width: calc(var(--grid-column-width) * 3 + var(--grid-gutter) * 2);
  --cover-width: min(calc((var(--section-width) - var(--space-s)) / 2), 130px);
  width: var(--cover-width);
  height: min(calc(var(--cover-width) * 200 / 130), 200px);
  background-size: 100% 100%;
  cursor: pointer;
`;

export default Highlight;
