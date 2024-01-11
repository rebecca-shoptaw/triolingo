import { LessonFooterCorrectProps } from "../types/types";

const LessonFooterCorrect = (props: LessonFooterCorrectProps) => {
  const { gameOver, nextQ } = props;

  return (
    <section id="footer" className="correct-foot">
      <section id="correct-result">
        <h3>Woohoo!</h3>
        <p>Trio is pleased.</p>
      </section>
      <button id="continue" className="button correct" onClick={nextQ}>
        {!gameOver ? "CONTINUE" : "FINISH"}
      </button>
    </section>
  );
};

export default LessonFooterCorrect;
