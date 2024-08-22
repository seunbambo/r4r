import styled from "styled-components/native";
import { StyledText } from "../../atoms/StyledText";
import { TextInput as BaseTextInput } from "../ContactUs/ContactUs.styles";

export const PageContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  flex-grow: 3;
  min-height: 100%;
`;

export const ImageContainer = styled.ImageBackground`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.green};
`;

ImageContainer.defaultProps = {
  source: require("../../../assets/images/countdown_background.png"),
};

export const AccomplishmentsHeading = styled(StyledText)`
  font-family: ${({ theme }) => theme.fontFamily.PoppinsBold};
`;

export const TextInput = styled(BaseTextInput)`
  color: ${({ theme }) => theme.colors.borderLight};
  background-color: ${({ theme }) => theme.colors.lighterGray};
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.spacing.large}px;
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

export const ButtonWrapper = styled.View`
  width: 50%;
`;
