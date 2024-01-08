import { LessonProgressBarProps } from "../types/types";

const LessonProgressBar = ({numAns, max}:LessonProgressBarProps) => {
  return (
    <section id="progress-box">
      <img id="progress-bar-fill" width={`${(numAns + 1) / (max / 100)}%`}></img>
    </section>
  );
};

export default LessonProgressBar;
