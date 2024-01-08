import { useState } from "react";
import { miniArrLength } from "../data/game_settings";
import { useRandomIndex } from "./useRandomIndex";

export const useQuestionData = (questionData: string[][]) => {
  const [questionInfo, setQuestionInfo] = useState<{
    question: string;
    answer: string;
  }>({ question: "", answer: "" });
  const [answers, setAnswers] = useState<string[]>([]);
  const [miniArr, setMiniArr] = useState<string[][]>([]);

  const createFreshArr = () => {
    const freshArr: string[][] = [];
    while (freshArr.length <= miniArrLength) {
      let freshQ = questionData[useRandomIndex(questionData)];
      if (!freshArr.includes(freshQ)) {
        freshArr.push(freshQ);
      }
    }
    setMiniArr(freshArr);
  };

  const loadQuestion = () => {
    const qIndex = useRandomIndex(miniArr);
    const [question, correctAns] = miniArr[qIndex];
    let ansArr: string[] = [];
    while (ansArr.length < 3) {
      let i = useRandomIndex(miniArr);
      let answer = miniArr[i][1];
      if (i != qIndex && !ansArr.includes(answer)) {
        ansArr.push(answer);
      }
    }
    ansArr.splice(((ansArr.length + 1) * Math.random()) | 0, 0, correctAns);

    setQuestionInfo({ question: question, answer: correctAns });
    setAnswers(ansArr);
  };

  const clearAnswers = () => setAnswers([]);

  return { questionInfo, answers, createFreshArr, loadQuestion, clearAnswers };
};
