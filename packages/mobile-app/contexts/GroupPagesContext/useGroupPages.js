/* eslint-disable global-require */
import { useEffect, useState } from "react";
import { useGroupPagesCtx } from "./useGroupPagesContext";

import { useCached } from "../../hooks/useApi";

export const useGroupPages = (itemSlug) => {
  const { groupPagesDataCtx, setGroupPagesDataCtx } = useGroupPagesCtx();
  const [groupShowContent, setGroupShowContent] = useState(undefined);
  const [groupIndexContent, setGroupIndexContent] = useState(undefined);
  const [isGroupDataLoaded, setItGroupDataLoaded] = useState(false);
  const { data: response } = useCached("/groups", false);

  const groupPagesData = async () => {
    setGroupPagesDataCtx(response?.data);
    setItGroupDataLoaded(true);
  };

  const formatGroupIndex = () => {
    const groupArray = Object.values(groupPagesDataCtx);
    const updatedGroupArray = groupArray?.map((group) => {
      return {
        title: group.title,
        imageProps: group.image,
        itemSlug: group.itemSlug,
      };
    });
    return {
      groups: {
        title: "Groups",
        items: [...(updatedGroupArray || [])],
      },
    };
  };

  const formatGroupShow = () => {
    const { image, articleText, title } = groupPagesDataCtx[itemSlug];
    return {
      imageProps: image,
      articleText,
      title,
    };
  };

  useEffect(() => {
    const loadContent = async () => {
      if (!groupPagesDataCtx) {
        await groupPagesData();
      } else if (itemSlug) {
        setGroupShowContent(formatGroupShow());
      } else {
        // Format Group Pages data for use on Services Screen
        setGroupIndexContent(formatGroupIndex());
      }
    };

    loadContent();
  }, [groupPagesDataCtx]);

  return { groupShowContent, groupIndexContent, isGroupDataLoaded };
};
