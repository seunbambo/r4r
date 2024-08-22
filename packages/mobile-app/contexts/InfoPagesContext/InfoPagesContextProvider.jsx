import { createContext, useMemo, useState } from "react";

export const InfoPagesContext = createContext();

export const InfoPagesContextProvider = ({ children }) => {
  const [infoPagesData, setInfoPagesData] = useState(undefined);

  const providerValue = useMemo(
    () => ({
      infoPagesData,
      setInfoPagesData,
    }),
    [infoPagesData],
  );

  return (
    <InfoPagesContext.Provider value={providerValue}>
      {children}
    </InfoPagesContext.Provider>
  );
};
