import { LessonProgressBarProps } from "../types/types";
import { max } from "../data/game_settings";

const LessonProgressBar = ({numAns}:LessonProgressBarProps) => {
  return (
    <section id="progress-box">
      <img id="progress-bar-fill" width={`${(numAns + 1) / (max / 100)}%`}></img>
    </section>
  );
};

export default LessonProgressBar;
