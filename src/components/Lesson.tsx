import LessonHeader from "./LessonHeader";
import LessonQuestion from "./LessonQuestion";
import LessonAnswerButton from "./LessonAnswerButton";
import LessonFooter from "./LessonFooter";

import { useQuestionData } from "../hooks/useQuestionData";
import { LessonProps } from "../types/types";
import { TRIO_PATH } from "../data/link_paths";

const Lesson = ({ data }: LessonProps) => {
  const { questionInfo, answers, createFreshArr, loadQuestion, clearAnswers } =
    useQuestionData(data);

  return (
    <main id="question-view">
      <LessonHeader />
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
