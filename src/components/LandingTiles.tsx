import { LandingMenuProps } from "../types/types";
import LandingLessonTile from "./LandingLessonTile";

const LandingTiles = (props: LandingMenuProps) => {
  const { subjectId, lessonInfo } = props.subject;
  
  return (
    <section className="lesson-tiles">
      {lessonInfo.map((_, index) => (
        <LandingLessonTile
          subject={subjectId}
          num={index}
          lesson={lessonInfo[index]}
          handleStart={props.handleStart}
        />
      ))}
    </section>
  );
};

export default LandingTiles;
