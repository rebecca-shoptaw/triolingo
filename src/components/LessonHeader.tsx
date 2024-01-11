import LessonEnd from "./LessonEnd";
import LessonProgressBar from "./LessonProgressBar";
import LessonHearts from "./LessonHearts";
import { LessonHeaderProps } from "../types/types";

const LessonHeader = (props:LessonHeaderProps) => {
  return (
    <header id="question-header">
      <LessonEnd handleGameEnd={props.handleGameEnd} />
      <LessonProgressBar numAns={props.numAns} />
      <LessonHearts numIncorrect={props.numIncorrect} />
    </header>
  );
};

export default LessonHeader;
