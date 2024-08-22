import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const DateWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.borderDark};
  border-color: ${({ theme, hasError }) =>
    hasError ? theme.colors.error : theme.colors.borderLight};
  border-bottom-width: 1px;
  border-width: ${({ theme, hasError }) => (hasError ? 1 : 0)}px;
  padding: ${({ theme }) => theme.spacing.medium}px;
  height: 50px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.regular}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TimePicker = styled(DateTimePicker)``;
TimePicker.defaultProps = {
  mode: "time",
};

export const DatePicker = styled(DateTimePicker)``;
TimePicker.defaultProps = {
  mode: "date",
};
