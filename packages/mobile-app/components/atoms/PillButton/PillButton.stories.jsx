import React, { useState } from "react";
import { View } from "react-native";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import { PillButton, CenterView } from "..";
import { theme } from "../../../assets/styles";

const ButtonWrapper = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return <PillButton onPress={handlePress} selected={isSelected} {...props} />;
};

storiesOf("Pill Button", module)
  .addDecorator((getStory) => (
    <CenterView backgroundColor={theme.colors.black}>{getStory()}</CenterView>
  ))
  .addDecorator(withKnobs)
  .add("default - primary", () => (
    <PillButton onPress={action("clicked-text")} title="default" />
  ))
  .add("secondary", () => (
    <PillButton
      onPress={action("clicked-secondary")}
      title="Secondary Button"
      variant="secondary"
    />
  ))
  .add("tertiary", () => (
    <PillButton
      onPress={action("clicked-tertiary")}
      title="Tertiary Button"
      variant="tertiary"
    />
  ))
  .add("quaternary", () => (
    <PillButton
      onPress={action("clicked-quaternary")}
      title="Quaternary Button"
      variant="quaternary"
    />
  ))
  .add("primary large, with set width", () => (
    <View style={{ width: 300 }}>
      <PillButton
        onPress={action("clicked-text")}
        title="Primary Button"
        isLarge
      />
    </View>
  ))
  .add("disabled", () => (
    <PillButton
      onPress={action("clicked-disabled")}
      title="Disabled Button"
      disabled={boolean("Disabled", true)}
    />
  ))
  .add("default - primary - long text", () => (
    <PillButton
      onPress={action("clicked-long-text")}
      title="Login into the system, else signup"
    />
  ))
  .add("multiple buttons side by side", () => (
    <View style={{ flexDirection: "row" }}>
      <PillButton
        onPress={action("clicked-side-left")}
        title="Ready to login?"
      />
      <View style={{ width: 10 }} />
      <PillButton
        onPress={action("clicked-side-right")}
        title="Wanna signup?"
        variant="secondary"
      />
    </View>
  ))
  .add("tertiary as a filter", () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: `${theme.colors.white}`,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <PillButton
        onPress={action('clicked-tertiary')}
        title='Tertiary Button Filter'
        variant='tertiary'
        selected={boolean('Selected', true)}
      /> */}
      <ButtonWrapper title="Tertiary Button Filter" variant="tertiary" />
    </View>
  ));
