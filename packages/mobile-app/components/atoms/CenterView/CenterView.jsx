import React from "react";
import { Container } from "./CenterView.styles";

export const CenterView = ({ children, backgroundColor }) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};
