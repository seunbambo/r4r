import { useContext } from "react";
import { GroupPagesContext } from "./GroupPagesContextProvider";

export const useGroupPagesCtx = () => {
  const context = useContext(GroupPagesContext);
  if (!context) {
    throw new Error("useGroupPagesCtx must be used within a GroupPagesContext");
  }
  return context;
};
