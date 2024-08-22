import styled from "styled-components/native";
import PageContainer from "../../atoms/PageContainer";
import { Card as BaseCard } from "../../atoms/Card";
import { Image } from "../../atoms/Image";
import { PillButton } from "../../atoms";

import { StyledText } from "../../atoms/StyledText";

export const Container = styled(PageContainer)`
  background-color: ${({ theme }) => theme.colors.black};
`;

export const StreakValue = styled(StyledText)`
  font-size: ${({ theme }) => theme.fontSizes.xlarge}px;
  font-family: ${({ theme }) => theme.fontFamily.PoppinsBold};
`;

export const Card = styled(BaseCard)`
  background-color: ${({ theme }) => theme.colors.black};
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: ${({ align }) => align || "center"};
  padding-left: ${({ theme }) => theme.spacing.xxlarge}px;
  padding-right: ${({ theme }) => theme.spacing.xxlarge}px;
  padding-bottom: ${({ theme }) => theme.spacing.xlarge}px;
  margin-bottom: 15px;
`;

export const SmallText = styled(StyledText)`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  opacity: 0.65;
  margin-bottom: ${({ theme }) => theme.spacing.large}px;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const ImageWrapper = styled(Image)`
  width: ${({ width }) => width ?? 65}px;
  height: ${({ height }) => height ?? 65}px;
  margin: 10px;
`;

export const Text = styled(StyledText)``;

export const ImageOuterWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SoberStartButton = styled(PillButton)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SoberStartWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
