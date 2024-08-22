import { createContext, useMemo, useState } from "react";

export const HomeContext = createContext();

export const HomeContextProvider = ({ startTime, children }) => {
  const [startTimeCtx, setStartTimeCtx] = useState(startTime);

  const providerValue = useMemo(
    () => ({
      startTimeCtx,
      setStartTimeCtx,
    }),
    [startTimeCtx],
  );

  return (
    <HomeContext.Provider value={providerValue}>
      {children}
    </HomeContext.Provider>
  );
};
