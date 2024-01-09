import { useState } from "react";
import { max } from "../data/game_settings";

export const useGameStatus = () => {
  const [learning, setLearning] = useState(false);
  const [gameOver, setGameOver] = useState(true);

  const handleRetry = () => setGameOver(false);
  const handleGameEnd = () => setGameOver(true);
  const handleGameStart = () => {
    setLearning(true);
    setGameOver(false);
  };
  const checkGameOver = (numIncorrect: number, numAns: number) =>
    numIncorrect > 3 || numAns == max - 1 ? true : false;

  return { learning, gameOver, checkGameOver, handleRetry, handleGameEnd, handleGameStart };
};
