/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { LogoutConfirmation } from "./LogoutConfirmation";

storiesOf("LogoutConfirmation", module).add("Logout", () => <LogoutConfirmation />);
