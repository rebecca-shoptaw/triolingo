import LessonHeader from "./LessonHeader";
import LessonQuestion from "./LessonQuestion";
import LessonAnswerButton from "./LessonAnswerButton";
import LessonFooter from "./LessonFooter";

import { useQuestionData } from "../hooks/useQuestionData";
import { useScoreKeeping } from "../hooks/useScoreKeeping";
import { LessonProps } from "../types/types";
import { TRIO_PATH } from "../data/link_paths";

const Lesson = (props: LessonProps) => {
  const { questionInfo, answers } = useQuestionData(props.data);
  const { numAns, numCorrect, numIncorrect, resetScore, incrementNums } =
    useScoreKeeping();

  return (
    <main id="question-view">
      <LessonHeader
        numAns={numAns}
        numIncorrect={numIncorrect}
        handleGameEnd={props.handleGameEnd}
      />
      <LessonQuestion
        speakerPath={TRIO_PATH}
        question={questionInfo.question}
      />
      <section className="ans-box">
        {answers.map((answer, index) => (
          <LessonAnswerButton key={index + 1} answer={answer} num={index + 1} />
        ))}
      </section>
      <LessonFooter />
    </main>
  );
};

export default Lesson;
