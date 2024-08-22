import { DefaultTheme } from "react-native-paper";

export const colors = {
  ...DefaultTheme.colors,
  background: "#000",
  black: "#000",
  gray: "#E5E5E5",
  lighterGray: "#F5F5F5",
  dividerDarkGray: "#DCE1E6",
  green: "#8CAF39",
  greenLight: "#F3F7EB",
  placeholder: "#FFF",
  primary: "#8CAF39",
  surface: "#222",
  text: "#FFF",
  greenWithOpacity: "rgba(140, 175, 57, 0.1)",
  borderSubdark: "#282A2C",
  borderDark: "#1D1D1D",
  borderLight: "#8E8E8E",
  white: "#fff",
  whiteWithOpacity: "rgba(255, 255, 255, 0.4)",
  transparent: "rgba(255, 255, 255, 0)",
  error: "#7B0D0D",
};
export const spacing = {
  xxsmall: 2,
  xsmall: 4,
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 20,
  xxlarge: 30,
};

export const fontSizes = {
  ...DefaultTheme.fontSize,
  xsmall: 10,
  small: 12,
  regular: 14,
  normal: 17,
  medium: 21,
  gutter: 25,
  large: 31,
  xlarge: 35,
  xxlarge: 42,
  extralarge: 61,
  extraextralarge: 84,
};

const fontOpacity = {
  default: 1,
  faint: 0.9,
  lighter: 0.75,
  light: 0.65,
  medium: 0.5,
  dark: 0,
};

const fontFamily = {
  PoppinsBlack: "PoppinsBlack", // font-weight: 900
  PoppinsExtraBold: "PoppinsExtraBold", // font-weight: 800
  PoppinsBold: "PoppinsBold", // font-weight: 700
  PoppinsSemiBold: "PoppinsSemiBold", // font-weight: 600
  PoppinsMedium: "PoppinsMedium", // font-weight: 500
  Poppins: "Poppins", // font-weight: 400
  PoppinsLight: "PoppinsLight", // font-weight: 300
  PoppinsExtraLight: "PoppinsExtraLight", // font-weight: 200
  PoppinsThin: "PoppinsThin", // font-weight: 100
  PoppinsItalic: "PoppinsItalic", // font-weight: 400 - italic
};

const borders = {
  radius: {
    none: 0,
    default: 16,
  },
};

const dividers = {
  dividerSecondary: {
    backgroundColor: colors.dividerDarkGray,
    paddingTop: "10px",
    paddingBottom: "10px",
  },
};

export default {
  ...DefaultTheme,
  ...dividers,
  spacing,
  borders,
  colors,
  fontSizes,
  fontOpacity,
  fontFamily,
  dark: false,
};
