import { LandingLessonTileProps } from "../types/types";
import { useActiveInfo } from "../hooks/useActiveInfo";
import LandingLessonInfo from "./LandingLessonInfo";

const LandingLessonTile = (props: LandingLessonTileProps) => {
  const { activeInfoBox, toggleActive } = useActiveInfo();
  const { subject, num, lesson, handleStart } = props;

  return (
    <section className="lesson-tile">
      <i
        id={`${subject}-${num}`}
        className="bi bi-card-list lesson-circle left"
        onClick={() => toggleActive(num)}
      ></i>
      {activeInfoBox == num && (
        <LandingLessonInfo lesson={lesson} handleStart={handleStart} />
      )}
     
    </section>
  );
};

export default LandingLessonTile;
