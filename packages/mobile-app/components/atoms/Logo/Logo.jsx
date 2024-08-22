import React from "react";
import { StyledText } from "../StyledText";
import { LogoWrapper, LowerText } from "./Logo.styles";

export function Logo({ ...rest }) {
  return (
    <LogoWrapper {...rest}>
      <StyledText
        caps="uppercase"
        fontSize={18}
        opacity="default"
      >
        Racing{" "}
        <StyledText fontFamily="PoppinsItalic" fontSize={18}>
          for
        </StyledText>
      </StyledText>
      <LowerText
        fontSize={18}
        fontWeight="bold"
        caps="uppercase"
        opacity="default"
      >
        Recovery
      </LowerText>
    </LogoWrapper>
  );
}
