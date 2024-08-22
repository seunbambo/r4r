import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { ScreenHeader } from "./ScreenHeader";
import { PillButton } from "../../atoms/PillButton";
import { Logo } from "../../atoms/Logo";
import grid from "../../../assets/images/grid.png";
import list from "../../../assets/images/list.png";

const ChangeView = (props) => {
  const [isGridOrList, setIsGridOrList] = useState(true);

  const rightAction = () => {
    setIsGridOrList(!isGridOrList);
  };

  return (
    <ScreenHeader
      rightAction={rightAction}
      rightIcon={isGridOrList ? grid : list}
      centerItem={isGridOrList ? "Group" : "Schedule"}
      {...props}
    />
  );
};

storiesOf("ScreenHeader", module)
  .add("with back arrow", () => (
    <ScreenHeader
      centerItem="Ignite Euphoria Success Story 5"
      backAction={action("Went back!")}
    />
  ))
  .add("with right icon alternate view", () => <ChangeView />)
  .add("with right button", () => (
    <ScreenHeader
      centerItem={<Logo />}
      rightItem={
        <PillButton onPress={action("Right button clicked")} title="Log In" />
      }
    />
  ))
  .add("with customized background", () => (
    <ChangeView
      centerItem="Counceling Services"
      backgroundColor="rgba(255, 255, 255, 0)"
    />
  ));
