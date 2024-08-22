import styled from "styled-components/native";
import { Divider } from "../../atoms";
import { Card } from "../../atoms/Card";
import { PillButton } from "../../atoms/PillButton/PillButton";
import { Section } from "../../patterns";

export const Container = styled.View`
  padding: 10px;
`;

export const Subtitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledCard = styled(Card)`
  padding-left: ${({ theme }) => theme.spacing.xlarge}px;
  padding-right: ${({ theme }) => theme.spacing.xlarge}px;
  padding-top: ${({ theme }) => theme.spacing.xxlarge}px;
  border-color: ${({ theme }) => theme.colors.whiteWithOpacity};
`;

export const AccomplishmentPillButton = styled(PillButton)`
  margin-right: ${({ theme }) => theme.spacing.xlarge}px;
`;
// flex-grow: 3;

export const SchedulePillButton = styled(PillButton)`
  width: 50%;
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge}px;
`;

export const ArticleBottom = styled(Section)`
  margin-bottom: 30px;
`;

export const Space = styled.View`
  margin: 10px;
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
