import styled from "styled-components/native";
import { PillButton, StyledText } from "../../atoms";
import { ContentArea } from "../../atoms/ContentArea";

export const CenteredContent = styled(ContentArea)`
  justify-content: center;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.xxlarge}px;
  padding-right: ${({ theme }) => theme.spacing.xxlarge}px;
`;

export const Compass = styled.Image`
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge}px;
`;
Compass.defaultProps = {
  source: require("../../../assets/images/compass_explore.png"),
};

export const Subtitle = styled(StyledText)`
  margin-top: ${({ theme }) => theme.spacing.large}px;
`;

export const FilterButton = styled(PillButton)`
  background-color: ${({ theme }) => theme.colors.borderSubdark};
  border-radius: 6px;
`;

export const ButtonRow = styled.View`
  flex-grow: 3;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const LowerButtons = styled.View`
  height: 100px;
  padding-horizontal: ${({ theme }) => theme.spacing.medium}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-width: 3px;
  border-top-color: ${({ theme }) => theme.colors.dividerDarkGray};
  width: 100%;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TagPill = styled(PillButton)`
  width: auto;
  font-size: ${({ theme }) => theme.fontSizes.xsmall}px;
  flex-direction: row;
  background-color: ${({ theme, active }) =>
    !active ? theme.colors.white : theme.colors.greenLight};
  border-color: ${({ theme, active }) =>
    active ? theme.colors.green : theme.colors.dividerDarkGray};
  border-width: 1px;
  margin-bottom: ${({ theme }) => theme.spacing.small}px;
  margin-right: ${({ theme }) => theme.spacing.small}px;
`;

export const TagView = styled.View`
  flex-direction: row;
  width: 100%;
  align-around: space-between;
`;

export const TitleText = styled(StyledText)`
  text-align: center;
`;
TitleText.defaultProps = {
  variant: "title",
};

export const SubtitleText = styled(TitleText)``;
SubtitleText.defaultProps = {
  variant: "subtitle",
};

export const ButtonWrapper = styled.View`
  width: 50%;
`;
