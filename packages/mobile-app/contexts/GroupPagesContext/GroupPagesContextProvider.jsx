import { createContext, useMemo, useState } from "react";

export const GroupPagesContext = createContext();

export const GroupPagesContextProvider = ({ children }) => {
  const [groupPagesDataCtx, setGroupPagesDataCtx] = useState(undefined);

  const providerValue = useMemo(
    () => ({
      groupPagesDataCtx,
      setGroupPagesDataCtx,
    }),
    [groupPagesDataCtx],
  );

  return (
    <GroupPagesContext.Provider value={providerValue}>
      {children}
    </GroupPagesContext.Provider>
  );
};
