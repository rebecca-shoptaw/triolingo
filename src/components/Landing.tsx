import { LandingMenuProps } from "../types/types";
import TrioBox from "./TrioBox";
import LandingSubjectBanner from "./LandingSubjectBanner";
import LandingTiles from "./LandingTiles";

const Landing = (props: LandingMenuProps) => {
  const { subjectHeader, subjectDescription } = props.subject;

  return (
    <main id="start-view">
      <section id="page-container">
        <LandingSubjectBanner
          subject={subjectHeader}
          description={subjectDescription}
        />
        <LandingTiles {...props} />
        <TrioBox />
      </section>
    </main>
  );
};

export default Landing;
