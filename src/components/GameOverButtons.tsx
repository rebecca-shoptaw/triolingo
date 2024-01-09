import { GameOverProps } from "../types/types";
import GameOverButton from "./GameOverButton";
import { gameOverButtonData } from "../data/game_graphics";

const GameOverButtons = (props: GameOverProps) => {
  const { win, handleRetry, createFreshArr, handleStop } = props;
  const { retry, restart, exit } = gameOverButtonData;

  const buttons = [
    { data: retry, onClick: handleRetry },
    { data: restart, onClick: createFreshArr, winOnly: true },
    { data: exit, onClick: handleStop },
  ];

  return (
    <section className="result-buttons">
      {buttons.map(
        (button) =>
          !(button.winOnly && !win) && (
            <GameOverButton data={button.data} onClick={button.onClick} />
          )
      )}
    </section>
  );
};

export default GameOverButtons;
