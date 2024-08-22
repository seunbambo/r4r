import { useContext } from "react";
import { InfoPagesContext } from "./InfoPagesContextProvider";

export const useInfoPagesCtx = () => {
  const context = useContext(InfoPagesContext);
  if (!context) {
    throw new Error("useInfoPagesCtx must be used within a InfoPagesContext");
  }
  return context;
};
