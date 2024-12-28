import { useState } from "react";

export const useTimer = (initialTime: number) => {
  const [time, setTime] = useState<number>(initialTime);
  const resetTimer = () => setTime(60);

  return { time, setTime, resetTimer };
};