import React from "react";
import { Container, Title, Subtitle } from "./SummaryData.styles";

export const SummaryData = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle maxFontSizeMultiplier={1}>{subtitle}</Subtitle>
    </Container>
  );
};
