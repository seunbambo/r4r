import * as React from "react";
import { theme } from "../../../assets";
import { StyledText } from "../StyledText";
import { Wrapper, RadioView } from "./RadioButton.styles";
import { RadioButton as BaseRadioButton } from "react-native-paper";

export const RadioButton = ({
  value,
  color,
  onValueChange,
  data,
  itemWrapperProps,
  ...rest
}) => {
  return (
    <BaseRadioButton.Group
      onValueChange={onValueChange}
      value={value}
      {...rest}
    >
      {data.map((d, index) => {
        return (
          <Wrapper
            key={index}
            onPress={() => onValueChange(d.value)}
            {...itemWrapperProps}
          >
            <RadioView selected={d.value === value}>
              <BaseRadioButton.Item
                color={color ?? theme.colors.green}
                value={d.value}
              />
              <StyledText
                fontSize={14}
                fontWeight="bold"
                color={color ?? theme.colors.black}
                padding={10}
              >
                {d.text}
              </StyledText>
            </RadioView>
          </Wrapper>
        );
      })}
    </BaseRadioButton.Group>
  );
};
