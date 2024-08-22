/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from "react";
import { Image } from "react-native";
import {
  ListToggle,
  MainContainer,
  HeadingText,
  ContentContainer,
  Item,
} from "./ExpandableList.styles";

const plusImage = require("../../../assets/images/plus.png");
const minusImage = require("../../../assets/images/minus.png");

export const ExpandableListContainer = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export const ExpandableListItem = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Item>
      <ListToggle
        onPress={() => {
          setIsExpanded((previous) => !previous);
        }}
      >
        <HeadingText>{title}</HeadingText>
        <Image source={isExpanded ? minusImage : plusImage} />
      </ListToggle>
      {isExpanded && <ContentContainer>{children}</ContentContainer>}
    </Item>
  );
};
