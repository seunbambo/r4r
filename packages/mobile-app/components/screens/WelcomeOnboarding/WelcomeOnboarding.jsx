import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity, useWindowDimensions, View } from "react-native";
import { PillButton } from "../../atoms/PillButton";
import {
  BodyText,
  HeadingText,
  StyledImageBackground,
  StyledView,
} from "./WelcomeOnboarding.styles";
import { useAmplitude } from "../../../hooks/useAmplitude";

export const WelcomeOnboarding = ({ ...rest }) => {
  const navigation = useNavigation();
  useAmplitude(WelcomeOnboarding.displayName);

  const { width, height } = useWindowDimensions();

  return (
    <StyledView {...rest}>
      <StyledImageBackground
        height={height}
        width={width}
        source={require("../../../assets/images/compass.jpg")}
        resizeMode="cover"
      >
        <View>
          <HeadingText variant="subHeading" alignment="center">
            Start Your Journey
          </HeadingText>
          <BodyText alignment="center">
            Welcome! We’re proud of you. You’re of value.
          </BodyText>
          <TouchableOpacity>
            <PillButton
              fontSize={14}
              variant="tertiary"
              title="Continue"
              onPress={() => {
                navigation.navigate("WelcomeOnboarding2");
              }}
            />
          </TouchableOpacity>
        </View>
      </StyledImageBackground>
    </StyledView>
  );
};

WelcomeOnboarding.displayName = "WelcomeOnboarding";
