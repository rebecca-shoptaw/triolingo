import { LandingLessonTileProps } from "../types/types";

const LandingLessonTile = (props: LandingLessonTileProps) => {
  const { subject, num, toggleActive } = props;

  return (
    <i
      id={`${subject}-${num}`}
      className="bi bi-card-list lesson-circle left"
      onClick={() => toggleActive(num)}
    ></i>
  );
};

export default LandingLessonTile;
