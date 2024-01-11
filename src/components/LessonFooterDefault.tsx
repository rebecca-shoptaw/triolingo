import { LessonFooterDefaultProps } from "../types/types";

const LessonFooterDefault = (props: LessonFooterDefaultProps) => {
  const { selected, validate } = props;

  return (
    <section id="footer" className="default-foot">
      <button
        id="check"
        className={`button ${!selected ? "deselect" : "clickable"}`}
        onClick={validate}
      >
        CHECK
      </button>
    </section>
  );
};

export default LessonFooterDefault;
