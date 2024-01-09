import { gameOverWinData } from "../data/game_graphics";
import { TRIO_PATH } from "../data/link_paths";
const { headline, tagline } = gameOverWinData;

const GameOverWinGraphics = () => {
  return (
    <section>
      <h2 className="game-result-banner">{headline}</h2>
      <section className="result-graphics">
        <section id="win-hearts">
          <i id="heart-1" className="bi bi-heart-fill"></i>
          <i id="heart-2" className="bi bi-heart-fill"></i>
          <i id="heart-3" className="bi bi-heart-fill"></i>
        </section>
        <img src={TRIO_PATH} className="trio-result" />
      </section>
      <h3 className="game-result-tagline">{tagline}</h3>
    </section>
  );
};

export default GameOverWinGraphics;
