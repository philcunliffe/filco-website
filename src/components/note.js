import * as React from 'react'
import StageIcon from './stage-icon';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import slugify from '@sindresorhus/slugify';

const Note = ({ title, stage, lastTended, tags }) => {
  return (
    <StyledNote onClick={() => navigate(`/garden/${slugify(title)}`)}>
      <h3><StageIcon size={'test'} stage={stage} />{title}</h3>
    </StyledNote>
  )
}

const StyledNote = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 75px;
`

export default Note;
