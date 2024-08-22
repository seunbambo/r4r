import { useContext } from "react";
import { ScheduleContext } from "./ScheduleContextProvider";

export const useScheduleCtx = () => {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error("useScheduleCtx must be used within a ScheduleContext");
  }
  return context;
};
