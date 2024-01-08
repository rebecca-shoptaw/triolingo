export const useRandomIndex = (arr: Array<string | string[]>) =>
  Math.floor(Math.random() * arr.length);
