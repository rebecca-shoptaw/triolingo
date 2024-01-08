import { useState } from "react";

export const useGameStatus = () => {
  const [learning, setLearning] = useState(false);
  const [gameOver, setGameOver] = useState(true);

  const handleRetry = () => setGameOver(false);
  const handleGameEnd = () => setGameOver(true);
  const handleGameStart = () => {
    setLearning(true);
    setGameOver(false);
  };

  return { learning, gameOver, handleRetry, handleGameEnd, handleGameStart };
};
