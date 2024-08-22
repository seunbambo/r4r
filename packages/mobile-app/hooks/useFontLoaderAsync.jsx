import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import PoppinsBlack from "../assets/fonts/Poppins-Black.ttf";
import PoppinsItalic from "../assets/fonts/Poppins-Italic.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";
import PoppinsLight from "../assets/fonts/Poppins-Light.ttf";
import PoppinsExtraLight from "../assets/fonts/Poppins-ExtraLight.ttf";
import PoppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf";
import PoppinsExtraBold from "../assets/fonts/Poppins-ExtraBold.ttf";
import PoppinsMedium from "../assets/fonts/Poppins-Medium.ttf";
import Poppins from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsThin from "../assets/fonts/Poppins-Thin.ttf";

export default function useCachedResources() {
  const [isLoadingComplete] = useFonts({
    ...Ionicons.font,
    PoppinsBlack, // font-weight: 900
    PoppinsExtraBold, // font-weight: 800
    PoppinsBold, // font-weight: 700
    PoppinsSemiBold, // font-weight: 600
    PoppinsMedium, // font-weight: 500
    Poppins, // font-weight: 400
    PoppinsLight, // font-weight: 300
    PoppinsExtraLight, // font-weight: 200
    PoppinsThin, // font-weight: 100
    PoppinsItalic, // font-weight: 400 - italic
  });

  if (!isLoadingComplete) {
    return null;
  }

  return isLoadingComplete;
}
