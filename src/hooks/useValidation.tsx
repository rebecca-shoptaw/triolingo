export const useValidation = () => {
  const checkAnswer = (selectedAns: string, correctAns: string) =>
    selectedAns == correctAns;

  return checkAnswer;
};
