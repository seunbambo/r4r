import { createContext, useMemo, useState } from "react";

export const ResourcesContext = createContext();

export const ResourcesContextProvider = ({ children }) => {
  const [resourcesData, setResourcesData] = useState(undefined);

  const providerValue = useMemo(
    () => ({
      resourcesData,
      setResourcesData,
    }),
    [resourcesData],
  );

  return (
    <ResourcesContext.Provider value={providerValue}>
      {children}
    </ResourcesContext.Provider>
  );
};
