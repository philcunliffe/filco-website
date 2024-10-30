import * as React from "react";
import styled from "styled-components";

const BackButton = ({ className, onClick }) => {
  return (
    <svg
      version="1.1"
      id="Icons"
      viewBox="0 0 32 32"
      className={className}
      onClick={onClick}
    >
      <StyledPath
        class="st0"
        d="M4,16l8.3,8.3c0.6,0.6,1.7,0.2,1.7-0.7V19h13c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1H14V8.4c0-0.9-1.1-1.3-1.7-0.7
        L4,16z"
      />
    </svg>
  );
};

const StyledPath = styled.path`
  fill: none;
  stroke: var(--mud-brown-700);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
`;

export default BackButton;
