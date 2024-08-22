import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Card } from "../../atoms/Card";
import PageContainer from "../../atoms/PageContainer";
import { Section } from "../../patterns";

export const Container = styled(PageContainer)``;

export const Wrapper = styled.View`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.borderSubdark};
`;

export const TopPadding = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`;

export const TopWrapper = styled.View`
  padding-left: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-top: 10px;
`;

export const TopTextWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TopRightWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Space = styled.View``;

export const Touch = styled(TouchableOpacity)`
  padding: 12px;
`;

export const ChevronRight = styled.Image``;
ChevronRight.defaultProps = {
  source: require("../../../assets/images/right-chevron.png"),
  style: { width: 30, height: 30 },
};

export const ChevronLeft = styled.Image``;
ChevronLeft.defaultProps = {
  source: require("../../../assets/images/left-chevron.png"),
  style: { width: 30, height: 30 },
};

export const StyledImageBackground = styled.ImageBackground`
  height: 150px;
  min-height: 100%;
  max-height: 100%;
  width: ${({ width }) => width}px;
  padding: 10px;
`;

export const CardWrapper = styled(Card)`
  width: ${Dimensions.get("window").width / 2 - 18}px;
  min-height: 125px;
  max-height: 125px;
  background: ${({ theme }) => theme.colors.black};
`;

export const PaddedSection = styled(Section)``;
