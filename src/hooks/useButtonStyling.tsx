export const useButtonStyling = () => {
  const clearButtonSelection = () => {
    document.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("selected");
      btn.blur();
    });
  };

  const addButtonValidation = (
    selection: number,
    correct: boolean,
    btn: HTMLElement | null = document.getElementById(selection.toString())
  ) => btn?.classList.add(`${correct ? "correct" : "incorrect"}`);

  const clearButtonValidation = () => {
    document.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("incorrect");
      btn.classList.remove("correct");
      btn.blur();
    });
  };

  return { addButtonValidation, clearButtonValidation };
};
