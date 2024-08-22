import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Card } from "../../atoms/Card/Card.styles";
import { Section } from "../../patterns/Section";

export const Container = styled.View``;

export const PaddedSection = styled(Section)``;

export const CardWrapper = styled(Card)`
  width: ${Dimensions.get("window").width / 2 - 18}px;
  min-height: 125px;
  max-height: 125px;
`;
