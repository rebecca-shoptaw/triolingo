import { TRIO_PATH } from "../data/link_paths"

const GameOver = () => {
  return (
    <div>
          <div id="win" className="result-box">
            {numAns == 20 - 1 && (
              <div>
                <h1>You did it!</h1>
                <i id="heart-1" className="bi bi-heart-fill"></i>
                <i id="heart-2" className="bi bi-heart-fill"></i>
                <i id="heart-3" className="bi bi-heart-fill"></i>
              </div>
            )}
            {numIncorrect > 3 && <h1>Better luck next time.</h1>}
            <img src={TRIO_PATH} className="trio-result" />
            {numAns == 20 - 1 && <h3>Trio is very proud of you.</h3>}
            {numIncorrect > 3 && <h3> Trio still believes in you.</h3>}
            <button
              id="try-again"
              className="button clickable"
              onClick={handleRetry}
            >
              PRACTICE AGAIN
            </button>
            {numAns == 20 - 1 && (
              <button
                id="restart"
                className="button new"
                onClick={createFreshArr}
              >
                NEW WORD SET
              </button>
            )}
            <button id="exit" className="button clickable" onClick={handleStop}>
              EXIT
            </button>
          </div>
        </div>
  )
}

export default GameOver