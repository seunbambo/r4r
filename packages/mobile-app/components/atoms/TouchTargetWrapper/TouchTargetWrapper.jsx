/* eslint-disable react/no-unescaped-entities, react/no-unused-class-component-methods */
import React from "react";
import { TouchableOpacity } from "react-native";

export const TouchTargetWrapper = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ minWidth: 48, minHeight: 48 }}>
      {children}
    </TouchableOpacity>
  );
};
