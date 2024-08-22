import React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { Countdown } from "./Countdown";

const late = new Date();
late.setHours(23);
late.setMinutes(59);
late.setSeconds(59);

const soon = new Date();
soon.setSeconds(soon.getSeconds() + 20);

storiesOf("Countdown", module).add("countdown", () => (
  <View style={{ padding: 10 }}>
    <Countdown
      untilStart={soon}
      untilEnd={late}
      onPress={() => {
        alert("Hello!");
      }}
      onFinish={() => {
        alert("FINISHED");
      }}
    >
      <View style={{ marginTop: 30 }}>
        <Text style={{ color: "#FFF" }}>The live stream has started</Text>
      </View>
    </Countdown>
  </View>
));
