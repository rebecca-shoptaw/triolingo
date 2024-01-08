type LessonInfo = {
    header: string; 
    description: string; 
    data: string[][]; 
}

type SubjectData = {
    subjectId:string;
    subjectHeader:string;
    subjectDescription:string;
    lessonInfo: LessonInfo[]
}

export type LandingMenuProps = {
    subject: SubjectData;
    handleStart:() => void;
}

export type LandingSubjectBannerProps = {
    subject:string;
    description:string;
}

export type LandingLessonTileProps = {
    subject:string;
    num:number;
    toggleActive:(num: number) => void
}

export type LandingLessonInfoProps = {
    lesson:LessonInfo;
    handleStart:() => void;
}

export type LessonProps = {
    data:string[][];
    handleGameEnd:() => void;
}

export type LessonHeaderProps = {
    numAns:number;
    numIncorrect:number;
    handleGameEnd:() => void;
}

export type LessonEndProps = {
    handleGameEnd:() => void;
}

export type LessonHeartsProps = {
    numIncorrect: number;
}

export type LessonProgressBarProps = {
    numAns: number;
    max: number;
}

export type LessonQuestionProps = {
    speakerPath:string;
    question:string;
}

export type LessonAnswerButtonProps = {
    num:number;
    answer:string;
}

