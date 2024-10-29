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
      {/* <StyledImage src={coverUrl} /> */}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  cursor: pointer;
  max-width: 130px;
  max-height: 200px;
  width: calc(50% - var(--space-s) / 2);
  height: calc(
    ((100vw - (2 * var(--space-xl))) / 6 - (var(--space-s) / 2)) * 200 / 130
  );
  background-size: 100% 100%;
`;

export default Highlight;
