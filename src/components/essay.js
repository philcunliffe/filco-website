import * as React from "react";
import StageIcon from "./stage-icon";
import styled from "styled-components";
import slugify from "@sindresorhus/slugify";
import { navigate } from "gatsby";
import { timeAgo } from "../utils/time-ago";

const Essay = ({ title, planted, modified, excerpt, stage }) => {
  return (
    <StyledNote onClick={() => navigate(`/garden/${slugify(title)}`)}>
      <IconContainer>
        <StageIcon size={"test"} stage={stage} />
      </IconContainer>
      <InfoContainer>
        <NoteTitle>{title}</NoteTitle>
        <Excerpt>{excerpt}</Excerpt>
        <Planted>{timeAgo(planted)}</Planted>
      </InfoContainer>
    </StyledNote>
  );
};

const StyledNote = styled.div`
  display: flex;
  justify-content: flex-start;

  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  flex: 0 0;
  font-size: var(--step-1);
  padding-top: var(--space-2xs);
  justify-content: center;
`;

const InfoContainer = styled.div`
  flex-grow: 1;
  padding: var(--space-2xs);
`;

const NoteTitle = styled.p`
  font-size: var(--step-1);
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Planted = styled.span`
  font-size: var(--step--2);
`;

const Excerpt = styled.p`
  font-size: var(--step--1);
`;

export default Essay;
