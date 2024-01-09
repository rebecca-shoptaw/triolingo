import { GameOverButtonProps } from "../types/types";

const GameOverButtons = (props: GameOverButtonProps) => {
  const { win, handleRetry, handleStop, createFreshArr } = props;
  return (
    <section className="result-buttons">
      <button id="try-again" className="button clickable" onClick={handleRetry}>
        PRACTICE AGAIN
      </button>
      {win && (
        <button id="restart" className="button new" onClick={createFreshArr}>
          NEW WORD SET
        </button>
      )}
      <button id="exit" className="button clickable" onClick={handleStop}>
        EXIT
      </button>
    </section>
  );
};

export default GameOverButtons;
