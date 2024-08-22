import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useAuthCtx } from "../../../contexts/AuthContext";
import { useAmplitude } from "../../../hooks/useAmplitude";
import { StyledText } from "../../atoms";
import PageContainer from "../../atoms/PageContainer";
import { Confirmation } from "../../patterns/Confirmation";

export const LogoutConfirmation = () => {
  const authCtx = useAuthCtx();
  const navigation = useNavigation();
  useAmplitude(LogoutConfirmation.displayName);

  const handleLeftButton = () => {
    return navigation.goBack();
  };

  const handleRightButton = () => {
    authCtx.logout();
    return navigation.navigate("Home");
  };

  return (
    <PageContainer>
      <Confirmation
        content={
          <StyledText variant="subHeading" alignment="center" padding={10}>
            Are you sure you want to log out?
          </StyledText>
        }
        leftButtonText="Cancel"
        rightButtonText="Yes, Log Out"
        onPressLeft={handleLeftButton}
        onPressRight={handleRightButton}
      />
    </PageContainer>
  );
};

LogoutConfirmation.displayName = "LogoutConfirmation";
