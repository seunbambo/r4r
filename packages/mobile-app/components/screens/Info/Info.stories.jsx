/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Info } from "./Info";

const InfoWrapper = (itemSlug) => {
  // When the Info Screen is used in the app's stack navigator,
  // params (with the itemSlug) can be passed to its route by the Services Screen
  return (
    <Info route={{ params: itemSlug }} />
  );
};

storiesOf("Info", module)
  .add("Counselling", () => <InfoWrapper itemSlug="counselling" />)
  .add("Support Groups", () => <InfoWrapper itemSlug="supportGroups" />)
  .add("Exercise Groups", () => <InfoWrapper itemSlug="exerciseGroups" />)
  .add("Educational Wellness", () => (
    <InfoWrapper itemSlug="educationalWellness" />
  ));
