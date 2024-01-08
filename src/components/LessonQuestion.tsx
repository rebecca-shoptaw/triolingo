import { LessonQuestionProps } from "../types/types";

const LessonQuestion = (props: LessonQuestionProps) => {
  const { speakerPath, question } = props;
  return (
    <section id="question-type-1" className="question-box">
      <h2 className="instruction">Select the correct meaning</h2>
      <section className="speaker-box">
        <img className="speaker" src={speakerPath} />
        <p className="question">{question}</p>
      </section>
    </section>
  );
};

export default LessonQuestion;
