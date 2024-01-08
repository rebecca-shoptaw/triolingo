

const LessonFooter = () => {
  return (
    <div>
        {answered && selection == correct && (
            <div id="correct-result" className="result">
              <h3>Woohoo!</h3>
              <p>Trio is pleased.</p>
            </div>
          )}
          {answered && selection != correct && (
            <div id="incorrect-result" className="result">
              <h3>Nope!</h3>
              <p>The correct answer was choice {correct}.</p>
            </div>
          )}
    <div
            id="footer"
            className={`${
              answered && selection == correct
                ? "correct-foot"
                : answered && selection != correct
                ? "incorrect-foot"
                : ""
            }`}
          >
            {!answered && (
              <button
                id="check"
                className={`button ${
                  selection == 0 ? "deselect" : "clickable"
                }`}
                onClick={validate}
              >
                CHECK
              </button>
            )}
            {answered && (
              <button
                id="continue"
                className={`button ${
                  selection == correct ? "correct" : "incorrect"
                }`}
                onClick={nextQ}
              >
                {numAns == 20 - 1 || numIncorrect > 3 ? "FINISH" : "CONTINUE"}
              </button>
            )}
          </div>
          </div>
  )
}

export default LessonFooter