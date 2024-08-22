/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ResetCounter } from "./ResetCounter";

storiesOf("ResetCounter", module).add("Base", () => <ResetCounter />);
