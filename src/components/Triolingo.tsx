import { useState } from "react";
import { useEffect } from "react";
import SSAT_VOCAB from "../data/ssat_qs";
import LandingMenu from "./Landing";
import GameOver from "./GameOver";
import Lesson from "./Lesson";
import Header from "./Header";
import Footer from "./Footer";
import { SSAT } from "../data/subject_info";
import { useGameStatus } from "../hooks/useGameStatus";

const Triolingo = () => {
  const [miniArr, setMiniArr] = useState([["", ""]]);
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

  /*useEffect(() => {
    if (!gameOver) {
      setNumAns(0);
      setNumCorrect(0);
      setNumIncorrect(0);
    }
  }, [gameOver]);

  useEffect(() => {
    nextQ();
    handleGameEnd();
  }, [miniArr]);

  useEffect(() => {
    if (!answered) {
      document.querySelectorAll("button").forEach((btn) => {
        btn.classList.remove("selected");
        btn.blur();
      });
      if (selection != 0) {
        document
          .getElementById(selection.toString())
          ?.classList.add("selected");
      }
    }
  }, [selection]);

  const handleStart = () => {
    createFreshArr();
    handleGameStart();
  };

  const createFreshArr = () => {
    const freshArr = [["", ""]];
    let addIndex = 0;
    while (freshArr.length <= 60) {
      addIndex = Math.floor(Math.random() * wordsArr.length);
      if (!freshArr.includes(wordsArr[addIndex])) {
        freshArr.push(wordsArr[addIndex]);
      }
    }
    freshArr.shift();
    setMiniArr(freshArr);
  };

  const handleRetry = () => {
    handleGameStart();
  };

  const handleStop = () => {
    setNumAns(0);
    setNumCorrect(0);
    setNumIncorrect(0);
    handleGameEnd();
  };

  const validate = () => {
    if (selection != 0) {
      setAnswered(true);
      const curr_correct = numCorrect;
      const curr_incorrect = numIncorrect;
      const curr_ans = numAns;
      const btn = document.getElementById(selection.toString());
      if (selection == correct) {
        setNumCorrect(curr_correct + 1);
        btn?.classList.add("correct");
      } else if (selection != correct) {
        setNumIncorrect(curr_incorrect + 1);
        btn?.classList.add("incorrect");
      }
      setNumAns(curr_ans + 1);
    }
  };

  const nextQ = () => {
    if (numIncorrect > 3 || numAns == 20 - 1) {
      handleGameEnd();
    }
    setAnswered(false);
    setSelection(0);
    document.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("incorrect");
      btn.classList.remove("correct");
    });
    if (numAns < 20) {
      let setArr = wordsArr;
      if (miniArr.length > 1) {
        setArr = miniArr;
      }
      const answersIndex = [] as number[];
      const questionIndex = Math.floor(Math.random() * setArr.length);
      while (answersIndex.length < 3) {
        const i = Math.floor(Math.random() * setArr.length);
        if (i != questionIndex && !answersIndex.includes(i)) {
          answersIndex.push(i);
        }
      }
      const correctAnsNum = Math.floor(Math.random() * 3) + 1;
      setCorrect(correctAnsNum);

      switch (correctAnsNum) {
        case 1:
          setAns1(setArr[questionIndex][1]);
          setAns2(setArr[answersIndex[0]][1]);
          setAns3(setArr[answersIndex[1]][1]);
          setAns4(setArr[answersIndex[2]][1]);
          break;
        case 2:
          setAns1(setArr[answersIndex[0]][1]);
          setAns2(setArr[questionIndex][1]);
          setAns3(setArr[answersIndex[1]][1]);
          setAns4(setArr[answersIndex[2]][1]);
          break;
        case 3:
          setAns1(setArr[answersIndex[0]][1]);
          setAns2(setArr[answersIndex[1]][1]);
          setAns3(setArr[questionIndex][1]);
          setAns4(setArr[answersIndex[2]][1]);
          break;
        case 4:
          setAns1(setArr[answersIndex[0]][1]);
          setAns2(setArr[answersIndex[1]][1]);
          setAns3(setArr[answersIndex[2]][1]);
          setAns4(setArr[questionIndex][1]);
          break;
      }
      setQuestion(setArr[questionIndex][0]);
    }
  };*/

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
