import styled from "styled-components/native";
import { StyledText } from "../../atoms";

export const Wrapper = styled.View``;

export const Row = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => `${theme.colors.borderSubdark}`};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextWrapper = styled(StyledText)`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ChevronRight = styled.Image``;
ChevronRight.defaultProps = {
  source: require("../../../assets/images/chevron_right.png"),
  style: [{ marginRight: 20 }],
};
