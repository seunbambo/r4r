import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { shortenString } from "../../../utils/string";
import { StyledText } from "../../atoms/StyledText";
import { AppbarHeader, FlexView } from "./ScreenHeader.styles";

export function ScreenHeader({
  rightItem,
  rightAction,
  backAction,
  centerItem,
  backgroundColor,
  rightIcon,
  ...rest
}) {
  return (
    <AppbarHeader backgroundColor={backgroundColor} {...rest}>
      {backAction && <Appbar.BackAction onPress={backAction} />}
      {centerItem && (
        <View style={[StyleSheet.absoluteFill, { alignItems: "center" }]}>
          <Appbar.Content
            title={
              <StyledText variant="title">
                {shortenString(centerItem)}
              </StyledText>
            }
          />
        </View>
      )}
      <FlexView />
      {rightItem ||
        (rightIcon && (
          <Appbar.Action size={40} icon={rightIcon} onPress={rightAction} />
        ))}
    </AppbarHeader>
  );
}
