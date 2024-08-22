import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";

export const useAuthCtx = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthCtx must be used within a AuthContext");
  }
  return context;
};