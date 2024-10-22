import * as React from 'react'
import StageIcon from './stage-icon';

const Note = ({ title, stage, lastTended, tags }) => {
  return (
    <div className='note-card'>
      <h3><StageIcon size={'test'} stage={stage} />{title}</h3>
    </div>
  )
}

export default Note;
