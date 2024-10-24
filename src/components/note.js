import * as React from 'react'
import StageIcon from './stage-icon';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import slugify from '@sindresorhus/slugify';

const Note = ({ title, stage, lastTended, tags }) => {
  return (
    <StyledNote onClick={() => navigate(`/garden/${slugify(title)}`)}>
      <IconContainer>
        <StageIcon size={'test'} stage={stage} />
      </IconContainer>
      <InfoContainer>
        <NoteTitle>{title}</NoteTitle>
      </InfoContainer>
    </StyledNote>
  )
}

const StyledNote = styled.div`
display: flex;
flex: calc(50% - (var(--space-m) / 2)) 0 1;
justify-content: flex-start;

cursor: pointer;
`

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
`

const NoteTitle = styled.p`
height: 100%;
text-overflow: ellipsis;
overflow: hidden;
`

export default Note;
