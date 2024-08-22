import React from "react";

import { Row, ChevronRight, Wrapper, TextWrapper } from "./TextList.styles";

export const TextList = ({ text, onPress, ...rest }) => {
  return (
    <Wrapper>
      <Row onPress={onPress} {...rest}>
        <TextWrapper fontWeight="bold" opacity="default">
          {text}
        </TextWrapper>
        <ChevronRight />
      </Row>
    </Wrapper>
  );
};
