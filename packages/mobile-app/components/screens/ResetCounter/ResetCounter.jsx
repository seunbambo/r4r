import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useAmplitude } from "../../../hooks/useAmplitude";
import { StyledText } from "../../atoms";
import PageContainer from "../../atoms/PageContainer";
import { Confirmation } from "../../patterns/Confirmation";

export const ResetCounter = () => {
  const navigation = useNavigation();
  useAmplitude(ResetCounter.displayName);

  const handleLeftButton = () => {
    return navigation.goBack();
  };

  const handleRightButton = () => {
    return navigation.navigate("SoberStartDate");
  };

  return (
    <PageContainer>
      <Confirmation
        content={
          <StyledText variant="subHeading" alignment="center" padding={10}>
            Are you sure you want to reset your counter?
          </StyledText>
        }
        leftButtonText="Cancel"
        rightButtonText="Yes, Reset"
        onPressLeft={handleLeftButton}
        onPressRight={handleRightButton}
      />
    </PageContainer>
  );
};

ResetCounter.displayName = "ResetCounter";
