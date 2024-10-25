import * as React from "react";
import { stageToIcon } from "../utils/stageToIcon";

const StageIcon = ({ stage, size }) => {
  return <span>{stageToIcon(stage)}</span>;
};

export default StageIcon;
