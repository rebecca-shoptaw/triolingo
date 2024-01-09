import { useState } from "react";

export const useSelection = () => {
  const [selection, setSelection] = useState(0);
  const [answered, setAnswered] = useState(false);

  const selectButton = (num: number) => setSelection(num);
  const clearSelection = () => setSelection(0);
  const toggleAnswered = (bool: boolean) => setAnswered(bool);

  return { selection, selectButton, clearSelection, answered, toggleAnswered };
};
