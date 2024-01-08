import { LessonHeartsProps } from "../types/types";

const LessonHearts = ({numIncorrect}:LessonHeartsProps) => {
  return (
    <section id="hearts-box">
      {numIncorrect == 0 && <i className="bi bi-heart-fill"></i>}
      {numIncorrect <= 1 && <i className="bi bi-heart-fill"></i>}
      {numIncorrect <= 2 && <i className="bi bi-heart-fill"></i>}
    </section>
  );
};

export default LessonHearts;
