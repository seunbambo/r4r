import React from "react";
import { Image } from "react-native";
import { FocusedView } from "./Navigation.styles";

export const TabIcon = ({ image, focused }) => (
  <FocusedView isFocused={focused}>
    <Image source={image} />
  </FocusedView>
);
