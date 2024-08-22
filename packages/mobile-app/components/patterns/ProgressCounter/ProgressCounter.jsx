import React from "react";
import { StyledText } from "../../atoms";

export function ProgressCounter({ dueDate }) {
  return (
    <StyledText variant="body" fontWeight="bold" maxFontSizeMultiplier={1.2}>
      {dueDate} Days{" "}
      <StyledText variant="small" maxFontSizeMultiplier={1.1}>
        To get your next badge
      </StyledText>
    </StyledText>
  );
}
