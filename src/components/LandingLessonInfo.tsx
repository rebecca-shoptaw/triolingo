import { LandingLessonInfoProps } from "../types/types";

const LandingLessonInfo = (props:LandingLessonInfoProps) => {
const {header, description} = props.lesson;


  return (
    <div className="info-box left">
      <h3>{header}</h3>
      <p>{description}</p>
      <button id="practice" onClick={props.handleStart} className="button gold">
        PRACTICE
      </button>
    </div>
  );
};

export default LandingLessonInfo;
