import * as React from "react";

// Styles
import { StyledDivider, StyledView } from "./Divider.styles";

export function Divider({
  backgroundColor,
  dividerWidth,
  paddingTop,
  paddingBottom,
  ...rest
}) {
  return (
    <StyledView
      dividerWidth={dividerWidth}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      {...rest}
    >
      <StyledDivider backgroundColor={backgroundColor} />
    </StyledView>
  );
}
