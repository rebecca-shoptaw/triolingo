import { GameOverProps } from "../types/types";
import GameOverWinGraphics from "./GameOverWinGraphics";
import GameOverLossGraphics from "./GameOverLossGraphics";
import GameOverButtons from "./GameOverButtons";

const GameOver = (props: GameOverProps) => {
  return (
    <main>
      {props.win ? <GameOverWinGraphics /> : <GameOverLossGraphics />}
      <GameOverButtons {...props} />
    </main>
  );
};

export default GameOver;
