import { LessonFooterIncorrectProps } from "../types/types";

const LessonFooterIncorrect = (props: LessonFooterIncorrectProps) => {
  const { gameOver, nextQ, correctAns } = props;

  return (
    <section id="footer" className="incorrect-foot">
      <section id="incorrect-result">
        <h3>Nope!</h3>
        <p>The correct answer was {correctAns}.</p>
      </section>
      <button id="continue" className="button incorrect" onClick={nextQ}>
        {!gameOver ? "CONTINUE" : "FINISH"}
      </button>
    </section>
  );
};

export default LessonFooterIncorrect;
