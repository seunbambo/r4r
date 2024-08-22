import React, { useRef } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";

import { StyledTextInput, ErrorHelperText } from "./TextInput.styles";

export const TextInput = ({ errorMessage, ...props }) => {
  const theme = useTheme();

  // Update paper's input color
  const localTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      text: theme.colors.white,
      placeholder: "rgba(255,255, 255, .5)",
      ...props?.themeOverrides?.colors,
    },
  };

  const hasError = !!errorMessage;
  const inputRef = useRef();

  return (
    <TouchableOpacity
      onPress={() => {
        inputRef?.current?.focus();
      }}
    >
      <StyledTextInput
        theme={localTheme}
        {...props}
        hasError={hasError}
        activeUnderlineColor={theme.colors.green}
        ref={inputRef}
      />
      <ErrorHelperText
        type="error"
        visible={hasError}
        style={{
          marginLeft: -10,
          marginBottom: 10,
          fontSize: theme.fontSizes.regular,
        }}
      >
        {errorMessage}
      </ErrorHelperText>
    </TouchableOpacity>
  );
};
