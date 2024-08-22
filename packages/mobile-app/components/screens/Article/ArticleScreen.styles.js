import styled from "styled-components/native";
import { StyledText } from "../../atoms";
import PageContainer from "../../atoms/PageContainer";

export const Container = styled(PageContainer)``;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
`;

export const RightWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LeftWrapper = styled(StyledText)`
  flex: 1;
  align-items: center;
`;

export const TextWrapper = styled(StyledText)`
  padding-right: 10px;
`;

export const ArticleWrapper = styled.View`
  padding: 10px;
`;

export const Space = styled.View`
  margin: 10px;
`;
