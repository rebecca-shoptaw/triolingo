import LessonProgressBar from "./LessonProgressBar";
import LessonHearts from "./LessonHearts";

const LessonHeader = () => {
  return (
    <header id="question-header">
      <i id="end-lesson" className="bi bi-x-lg" onClick={handleStop}></i>
      <LessonProgressBar numAns={numAns} max={max} />
      <LessonHearts numIncorrect={numIncorrect} />
    </header>
  );
};

export default LessonHeader;
