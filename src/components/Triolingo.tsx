import LandingMenu from "./Landing";
import GameOver from "./GameOver";
import Lesson from "./Lesson";
import Header from "./Header";
import Footer from "./Footer";
import { SSAT } from "../data/subject_info";
import { useGameStatus } from "../hooks/useGameStatus";

const Triolingo = () => {
  const { gameOver, learning, handleGameStart, handleGameEnd } =
    useGameStatus();

  window.onload = () => {
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      switch (e.key) {
        case "1":
        case "2":
        case "3":
        case "4":
          document.getElementById(e.key)?.click();
          break;
        case "Enter":
          document.getElementById("check")?.click();
          document.getElementById("continue")?.click();
          document.getElementById("try-again")?.click();
          document.getElementById("practice")?.click();
          break;
      }
    });
  };

  return (
    <>
      <Header />
      {!learning && (
        <LandingMenu subject={SSAT} handleStart={handleGameStart} />
      )}
      {learning && gameOver && <GameOver win={win} handleRetry={handleGameStart} createFreshArr={createFreshArr} handleStop={handleGameEnd} />}
      {learning && !gameOver && (
        <Lesson data={SSAT.lessonInfo[0].data} handleGameEnd={handleGameEnd} />
      )}
      <Footer />
    </>
  );
};

export default Triolingo;
