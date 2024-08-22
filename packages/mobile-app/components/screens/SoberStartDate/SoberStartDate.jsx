import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useAuthCtx } from "../../../contexts/AuthContext";
import { useAmplitude } from "../../../hooks/useAmplitude";
import { usePostSoberDate } from "../../../hooks/useAuthenticatedApi";
import DatePicker from "../../atoms/DatePicker";
import PageContainer from "../../atoms/PageContainer";
import { Confirmation } from "../../patterns/Confirmation";
import { DateWrapper } from "./SoberStartDate.styles";

export const SoberStartDate = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(undefined);
  const postSoberDate = usePostSoberDate();
  useAmplitude(SoberStartDate.displayName);

  const handleLeftButton = () => {
    return navigation.goBack();
  };

  const handleRightButton = () => {
    if (date === undefined) {
      return Alert.alert("Error!", "Please set sober date.");
    }

    postSoberDate({ soberStartDate: date });
    return navigation.navigate("Home");
  };

  return (
    <PageContainer>
      <Confirmation
        content={
          <DateWrapper>
            <DatePicker
              placeholder="Sober Start Date"
              onChange={(value) => {
                setDate(value);
              }}
              isRangeLimited
            />
          </DateWrapper>
        }
        leftButtonText="Cancel"
        rightButtonText="Confirm"
        onPressLeft={handleLeftButton}
        onPressRight={handleRightButton}
      />
    </PageContainer>
  );
};

SoberStartDate.displayName = "SoberStartDate";
