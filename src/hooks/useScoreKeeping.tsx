import { useState } from "react";

export const useScoreKeeping = () => {
  const [numAns, setNumAns] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [numIncorrect, setNumIncorrect] = useState(0);

  const resetScore = () => {
    setNumAns(0);
    setNumCorrect(0);
    setNumIncorrect(0);
  };

  const incrementNums = (correct: boolean) => {
    correct ? setNumCorrect(numCorrect + 1) : setNumIncorrect(numIncorrect + 1);
    setNumAns(numAns + 1);
  };

  return { numAns, numCorrect, numIncorrect, resetScore, incrementNums };
};
