import React from "react";
import { MainSection, TitleRow, Title, Content, Image } from "./Section.styles";

export const Section = ({ title, titleIconImage, children, ...rest }) => {
  return (
    <MainSection {...rest}>
      <TitleRow>
        {titleIconImage && <Image source={titleIconImage} />}
        <Title
          fontSize={14}
          fontWeight="medium"
          opacity="default"
          light={rest.light}
        >
          {title}
        </Title>
      </TitleRow>
      <Content>{children}</Content>
    </MainSection>
  );
};
