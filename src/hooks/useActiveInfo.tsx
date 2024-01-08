import { useState } from "react";

export const useActiveInfo = () => {
  const [activeInfoBox, setActiveInfoBox] = useState<number | null>(1);

  const resetInfo = () => setActiveInfoBox(null);
  const toggleActive = (num: number) =>
    activeInfoBox == num ? setActiveInfoBox(null) : setActiveInfoBox(num);

  return { activeInfoBox, resetInfo, toggleActive };
};
