import { createContext, useMemo, useState } from "react";

export const ArticleContext = createContext();

export const ArticleContextProvider = ({ children }) => {
  const [articleData, setArticleData] = useState(undefined);

  const providerValue = useMemo(
    () => ({
      articleData,
      setArticleData,
    }),
    [articleData],
  );

  return (
    <ArticleContext.Provider value={providerValue}>
      {children}
    </ArticleContext.Provider>
  );
};
