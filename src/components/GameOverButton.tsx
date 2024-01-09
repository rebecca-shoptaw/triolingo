import { GameOverButtonProps } from "../types/types";

const GameOverButton = (props: GameOverButtonProps) => {
  const { data, onClick } = props;

  return (
    <button
      id={data.id}
      className={`button ${data.className}`}
      onClick={onClick}
    >
      {data.text}
    </button>
  );
};

export default GameOverButton;
