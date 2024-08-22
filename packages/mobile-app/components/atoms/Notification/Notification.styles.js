import { Snackbar } from "react-native-paper";
import styled from "styled-components/native";

export const NotificationBar = styled(Snackbar)`
  background-color: ${(props) => props.theme.colors.green};
  font-size: ${(props) => props.theme.fontSizes.regular}px;
  font-weight: 800;
`;

export const ErrorNotificationBar = styled(NotificationBar)`
  background-color: ${(props) => props.theme.colors.error};
`;
