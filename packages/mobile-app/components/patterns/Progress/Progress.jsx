import React from "react";
import { SoberDaysValue, SmallText } from "./Progress.styles";

export const Progress = ({ value, title }) => {
  return (
    <>
      <SoberDaysValue>{value}</SoberDaysValue>
      <SmallText>{title}</SmallText>
    </>
  );
};
