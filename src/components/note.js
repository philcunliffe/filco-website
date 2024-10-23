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
        <h5>{title}</h5>
      </InfoContainer>
    </StyledNote>
  )
}

const StyledNote = styled.div`
display: flex;
flex: 12rem 1 1;
`

const IconContainer = styled.div`
display: flex;
flex: 30% 0;
font-size: 3rem;
align-items: center;
justify-content: center;
`;

const InfoContainer = styled.div`
flex-grow: 1
`

export default Note;
