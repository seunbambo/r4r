import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Alert,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { PillButton } from "../../atoms/PillButton";
import {
  BodyText,
  HeadingText,
  StyledImageBackground,
  StyledView,
} from "./WelcomeOnboarding2.styles";
import DatePicker from "../../atoms/DatePicker";
import { usePostSoberDate } from "../../../hooks/useAuthenticatedApi";
import { useAmplitude } from "../../../hooks/useAmplitude";

export const WelcomeOnboarding2 = ({ ...rest }) => {
  const navigation = useNavigation();
  useAmplitude(WelcomeOnboarding2.displayName);

  const { width, height } = useWindowDimensions();

  const [date, setDate] = useState(undefined);

  const postSoberDate = usePostSoberDate();

  const onContinue = () => {
    if (date === undefined) {
      return Alert.alert("Error!", "Please set sober date.");
    }

    postSoberDate({ soberStartDate: date });
    navigation.navigate("Home");
  };

  return (
    <StyledView {...rest}>
      <StyledImageBackground
        height={height}
        width={width}
        source={require("../../../assets/images/compass_dark.jpg")}
        resizeMode="cover"
      >
        <View style={{ alignItems: "flex-end", paddingTop: 10 }}>
          <PillButton
            title="Skip"
            variant="quaternary"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
        <View>
          <DatePicker
            placeholder="Sober Start Date"
            initialDate={undefined}
            onChange={(value) => {
              setDate(value);
            }}
            isRangeLimited
          />
        </View>
        <View>
          <HeadingText variant="subHeading" alignment="center">
            Set Your Sober Start Date
          </HeadingText>

          <BodyText alignment="center">
            You have given yourself the best gift ever by choosing sobriety.
            Today is the first day of what is going to be an amazing, never
            ending journey of sober self betterment.
          </BodyText>
          <TouchableOpacity>
            <PillButton
              fontSize={14}
              variant="tertiary"
              title="Continue"
              onPress={onContinue}
            />
          </TouchableOpacity>
        </View>
      </StyledImageBackground>
    </StyledView>
  );
};

WelcomeOnboarding2.displayName = "WelcomeOnboarding2";
