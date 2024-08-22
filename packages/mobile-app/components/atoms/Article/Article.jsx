import React from "react";
import { StyledText } from "../StyledText";
import { ArticleWrapper } from "./Article.styles";

export function Article({ title, body, padding, ...rest }) {
  return (
    <ArticleWrapper padding={padding} {...rest}>
      {title && <StyledText variant="subHeading" padding={8}>
        {title}
      </StyledText>}
      <StyledText variant="body" padding={8}>
        {body && body.map((paragraph, i) => {
          return `${i === body.length - 1 ? paragraph : `${paragraph}\n\n`}`;
        })}
      </StyledText>
    </ArticleWrapper>
  );
}
