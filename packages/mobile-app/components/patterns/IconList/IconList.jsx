import React from "react";

import {
  Row,
  ImageContainer,
  TitleContainer,
  Title,
  Subtitle,
  ChevronRight,
  List,
} from "./IconList.styles";

export const IconListItem = ({
  title,
  subtitle,
  image,
  onPress,
  showIconRight,
}) => (
  <Row onPress={onPress} rowReverse={showIconRight}>
    <ImageContainer rowReverse={showIconRight}>{image}</ImageContainer>
    <TitleContainer rowReverse={showIconRight}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TitleContainer>
    {!showIconRight && <ChevronRight />}
  </Row>
);

export const IconList = ({ data, onPress, ...rest }) => {
  if (!data) return null;

  return (
    <List style={{ height: 400 }} {...rest}>
      {data.map((row) => (
        <IconListItem
          key={row.id}
          onPress={() => onPress(row.id)}
          title={row.title}
          subtitle={row.subtitle}
          image={row.image}
        />
      ))}
    </List>
  );
};
