import LandingLessonInfo from "./LandingLessonInfo";
import LandingLessonTile from "./LandingLessonTile";
import { useActiveInfo } from "../hooks/useActiveInfo";
import { LandingMenuProps } from "../types/types";
import TrioBox from "./TrioBox";
import LandingSubjectBanner from "./LandingSubjectBanner";

const LandingMenu = (props: LandingMenuProps) => {
  const { activeInfoBox, toggleActive } = useActiveInfo();
  const { subjectId, subjectHeader, subjectDescription, lessonInfo } =
    props.subject;

  return (
    <main id="start-view">
      <section id="page-container">
        <LandingSubjectBanner
          subject={subjectHeader}
          description={subjectDescription}
        />
        {lessonInfo.map((_, index) => (
          <LandingLessonTile
            subject={subjectId}
            num={index}
            toggleActive={toggleActive}
          />
        ))}
        {activeInfoBox != null && (
          <LandingLessonInfo
            lesson={lessonInfo[activeInfoBox as number]}
            handleStart={props.handleStart}
          />
        )}
        <TrioBox />
      </section>
    </main>
  );
};

export default LandingMenu;
