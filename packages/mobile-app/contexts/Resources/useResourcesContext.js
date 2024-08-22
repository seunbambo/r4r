import { useContext } from "react";
import { ResourcesContext } from "./ResourcesContextProvider";

export const useResourcesCtx = () => {
  const context = useContext(ResourcesContext);
  if (!context) {
    throw new Error("useResourcesCtx must be used within a ResourcesContext");
  }
  return context;
};
