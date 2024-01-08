import { LessonAnswerButtonProps } from "../types/types";

const LessonAnswerButton = (props: LessonAnswerButtonProps) => {
  const { num, answer } = props;

  return (
    <button
      id={`${num}`}
      className={`ans ${
        answered == true && selection != num ? "unselect" : ""
      }`}
      onClick={() => (answered == false ? setSelection(num) : "")}
    >
      <span className="num">{num}</span>
      <p>{answer}</p>
    </button>
  );
};

export default LessonAnswerButton;
