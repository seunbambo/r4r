import { createContext, useMemo, useState } from "react";

export const ScheduleContext = createContext();

export const ScheduleContextProvider = ({ children }) => {
  const [scheduleData, setScheduleData] = useState(undefined);

  const providerValue = useMemo(
    () => ({
      scheduleData,
      setScheduleData,
    }),
    [scheduleData],
  );

  return (
    <ScheduleContext.Provider value={providerValue}>
      {children}
    </ScheduleContext.Provider>
  );
};
