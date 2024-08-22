import { useContext } from "react";
import { ArticleContext } from "./ArticleContextProvider";

export const useArticleCtx = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error("useArticleCtx must be used within a ArticleContext");
  }
  return context;
};
