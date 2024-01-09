import { gameOverLossData } from "../data/game_graphics";
import { TRIO_PATH } from "../data/link_paths";
const { headline, tagline } = gameOverLossData;

const GameOverLossGraphics = () => {
  return (
    <section className="result-graphics">
      <h2 className="game-result-banner">{headline}</h2>
      <section className="result-graphics">
        <img src={TRIO_PATH} className="trio-result" />
      </section>
      <h3 className="game-result-tagline">{tagline}</h3>
    </section>
  );
};

export default GameOverLossGraphics;
