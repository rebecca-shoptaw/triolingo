import { LessonFooterProps } from "../types/types";
import LessonFooterDefault from "./LessonFooterDefault";
import LessonFooterCorrect from "./LessonFooterCorrect";
import LessonFooterIncorrect from "./LessonFooterIncorrect";

const LessonFooter = (props: LessonFooterProps) => {
  const { answered, selected, correct, gameOver, validate, nextQ, correctAns } =
    props;
  return (
    <>
      {!answered && (
        <LessonFooterDefault selected={selected} validate={validate} />
      )}
      {answered &&
        (correct ? (
          <LessonFooterCorrect gameOver={gameOver} nextQ={nextQ} />
        ) : (
          <LessonFooterIncorrect
            gameOver={gameOver}
            nextQ={nextQ}
            correctAns={correctAns}
          />
        ))}
    </>
  );
};

export default LessonFooter;
