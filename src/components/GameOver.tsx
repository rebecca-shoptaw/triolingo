import GameOverWinGraphics from "./GameOverWinGraphics";
import GameOverLossGraphics from "./GameOverLossGraphics";
import GameOverButtons from "./GameOverButtons";
import { GameOverProps } from "../types/types";

const GameOver = (props: GameOverProps) => {
  const { win, handleRetry, createFreshArr, handleStop } = props;
  return (
    <main>
      {win ? <GameOverWinGraphics /> : <GameOverLossGraphics />}
      <GameOverButtons
        win={win}
        handleRetry={handleRetry}
        createFreshArr={createFreshArr}
        handleStop={handleStop}
      />
    </main>
  );
};

export default GameOver;
