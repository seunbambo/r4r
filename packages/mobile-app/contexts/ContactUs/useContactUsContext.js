import { useContext } from "react";
import { ContactUsContext } from "./ContactUsContextProvider";

export const useContactUsCtx = () => {
  const context = useContext(ContactUsContext);
  if (!context) {
    throw new Error("useContactUsCtx must be used within a ContactUsContext");
  }
  return context;
};
