import { LessonEndProps } from "../types/types"

const LessonEnd = ({handleGameEnd}:LessonEndProps) => {
  return (
    <i id="end-lesson" className="bi bi-x-lg" onClick={handleGameEnd}></i>
  )
}

export default LessonEnd