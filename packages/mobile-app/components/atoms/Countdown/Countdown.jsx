import React, { useEffect, useState } from "react";
import BaseCountdown from "react-native-countdown-component";
import { useTheme } from "react-native-paper";
import { Container } from "./Countdown.styles";
import { useScaledFontSize } from "../../../hooks/useScaledFontSize";

export const Countdown = ({
  untilStart,
  onPress,
  onFinish,
  children,
  isLive,
  inline,
}) => {
  const theme = useTheme();
  const [isFinished, setIsFinished] = useState(isLive);

  const getFontSize = useScaledFontSize();

  const digitFontSize = getFontSize("large");
  const labelFontSize = getFontSize("small");

  useEffect(() => {
    setIsFinished(isLive);
  }, [isLive]);

  return isFinished && children ? (
    children
  ) : (
    <Container style={{ allowFontScaling: false }} inline={inline}>
      <BaseCountdown
        until={untilStart > 0 ? untilStart : null}
        onFinish={() => {
          setIsFinished(true);
          onFinish && onFinish();
        }}
        digitTxtStyle={{
          color: theme.colors.white,
          textAlign: "center",
          fontSize: digitFontSize,
        }}
        digitStyle={{
          backgroundColor: "rgba(0,0,0,0)",
          marginTop: theme.fontSizes.small,
        }}
        timeLabelStyle={{
          marginTop: -theme.fontSizes.medium,
          color: theme.colors.white,
          fontSize: labelFontSize,
          opacity: 0.7,
          textAlign: "center",
        }}
        onPress={onPress}
        size={theme.fontSizes.large}
        style={{
          marginTop: -theme.fontSizes.gutter,
          marginBottom: theme.fontSizes.small,
          maxFontSizeMultiplier: 1,
          allowFontScaling: false,
        }}
      />
    </Container>
  );
};
