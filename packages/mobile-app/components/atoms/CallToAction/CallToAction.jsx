import React from "react";
import { Image } from "../Image";
import { StyledText } from "../StyledText";
import { ButtonWrapper, CallToActionWrapper } from "./CallToAction.styles";
import R4rLogoWhite1x from "../../../assets/images/RFR_ogo_white.png";
import { PillButton } from "../PillButton";

export function CallToAction({ text, onPress, buttonText, ...rest }) {
  return (
    <CallToActionWrapper {...rest}>
      <Image
        description="The Racing for Recovery logo"
        height={70}
        imageSource={R4rLogoWhite1x}
        width={70}
        padding={5}
      />
      <StyledText
        variant="body"
        fontWeight="bold"
        alignment="center"
        opacity="default"
      >
        {text}
      </StyledText>
      <ButtonWrapper>
        <PillButton onPress={onPress} title={buttonText} />
      </ButtonWrapper>
    </CallToActionWrapper>
  );
}
