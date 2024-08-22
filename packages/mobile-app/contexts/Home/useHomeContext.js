import { useContext } from "react";
import { HomeContext } from "./HomeContextProvider";

export const useHomeCtx = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeCtx must be used within a HomeContext");
  }
  return context;
};
