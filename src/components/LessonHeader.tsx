import LessonEnd from "./LessonEnd";
import LessonProgressBar from "./LessonProgressBar";
import LessonHearts from "./LessonHearts";
import { max } from "../data/game_settings";
import { LessonHeaderProps } from "../types/types";

const LessonHeader = (props:LessonHeaderProps) => {
  return (
    <header id="question-header">
      <LessonEnd handleGameEnd={props.handleGameEnd} />
      <LessonProgressBar numAns={props.numAns} max={max} />
      <LessonHearts numIncorrect={props.numIncorrect} />
    </header>
  );
};

export default LessonHeader;
