import React from "react";
import { PillButton } from "../../atoms";
import {
  ButtonWrapper,
  Space,
  ContentWrapper,
  Wrapper,
  InnerButtonWraper,
} from "./Confirmation.styles";

export function Confirmation({
  content,
  leftButtonText,
  rightButtonText,
  onPressLeft,
  onPressRight,
  ...rest
}) {
  return (
    <Wrapper {...rest}>
      <ContentWrapper>{content}</ContentWrapper>
      <ButtonWrapper>
        <InnerButtonWraper>
          <PillButton
            title={leftButtonText}
            variant="quaternary"
            onPress={onPressLeft}
          />
        </InnerButtonWraper>
        <Space />
        <InnerButtonWraper>
          <PillButton title={rightButtonText} onPress={onPressRight} />
        </InnerButtonWraper>
      </ButtonWrapper>
    </Wrapper>
  );
}
