import * as React from 'react'
import { stageToIcon } from '../utils/stageToIcon';

const StageIcon = ({ stage, size }) => {
  return (
    <span className={size} >
      {stageToIcon(stage)}
    </span>
  )
}

export default StageIcon;
