import { useEffect, useState } from "react";
import { useArticleCtx } from "./useArticleContext";

// This is trigger when a user clicks on an article
// I think there is no point loading the article here
// then returning it to the ArticleScreen base on itemSlug
// Currently, I just passed the article object to the ArticleScreen
// Not sure this is used anywhere
export const useArticle = (itemSlug) => {
  const { setArticleData } = useArticleCtx();
  const { articleData } = useArticleCtx();

  const [showArticleContent, setShowArticleContent] = useState(undefined);

  const getArticleData = async () => {
    setArticleData([]);
  };

  useEffect(() => {
    const loadContent = async () => {
      if (!articleData) {
        await getArticleData();
      } else {
        setShowArticleContent(articleData[itemSlug]);
      }
    };

    loadContent();
  }, [articleData]);

  return { showArticleContent };
};
