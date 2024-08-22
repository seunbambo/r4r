import React from "react";
import { useWindowDimensions } from "react-native";
import { useTheme } from "react-native-paper";

const MAX_SCALE = 1.4;

export const useScaledFontSize = () => {
  const pixelRatio = useWindowDimensions().fontScale;
  const theme = useTheme();

  const getScaledFontSize = (fontSizeKey) => {
    if (!fontSizeKey || !theme.fontSizes[fontSizeKey]) {
      throw "Must specify valid font-size key";
    }

    return pixelRatio > MAX_SCALE
      ? theme.fontSizes[fontSizeKey] / pixelRatio
      : theme.fontSizes[fontSizeKey];
  };

  return getScaledFontSize;
};
