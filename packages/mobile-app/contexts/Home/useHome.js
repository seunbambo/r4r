/* eslint-disable global-require */
import { useHomeCtx } from "./useHomeContext";

export const useHome = () => {
  const { startTimeCtx } = useHomeCtx();

  return { startTimeCtx };
};
