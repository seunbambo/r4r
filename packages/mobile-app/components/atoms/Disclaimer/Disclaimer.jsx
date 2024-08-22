import React from "react";
import { StyledInnerView } from "./Disclaimer.styles";
import { StyledText } from "../StyledText";

export const Disclaimer = ({ disclaimerText, ...rest }) => {
  return (
    <StyledInnerView>
      <StyledText {...rest} variant="small">
        {disclaimerText}
      </StyledText>
    </StyledInnerView>
  );
};
