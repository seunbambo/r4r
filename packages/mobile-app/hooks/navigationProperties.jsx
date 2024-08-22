import React from "react";
import { useTheme } from "react-native-paper";
import { Logo } from "../components/atoms";

export const useNavigationProperties = (withLogo) => {
  const theme = useTheme();
  const options = {
    headerStyle: {
      backgroundColor: theme.colors.black,
      shadowOffset: {  height: 1 },
      shadowColor: theme.colors.black,
      height: 90,
    },
    headerTitleStyle: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.poppins,
      fontSize: theme.fontSizes.medium,
      textTransform: "capitalize",
    },
    headerTitleAlign: "center",
    headerLeftLabelVisible: false,
    headerTintColor: theme.colors.white,
  };
  if (withLogo) {
    options.headerTitle = () => <Logo />;
  }
  return options;
};
