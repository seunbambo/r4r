/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Text, View } from "react-native";
import { Carousel } from "./Carousel";

storiesOf("Carousel", module).add("default (primary)", () => (
  <View style={{ padding: 20 }}>
    <Carousel contentHeight={300}>
      <View style={{ flex: 1, width: "100%", padding: 20 }}>
        <Text
          style={{
            color: "#FFF",
            fontWeight: "800",
            fontSize: 30,
            marginBottom: 10,
          }}
        >
          First one
        </Text>
        <Text style={{ color: "#FFF" }}>
          This thing comes fully loaded. AM/FM radio, reclining bucket seats,
          and... power windows. Do you have any idea how long it takes those
          cups to decompose. They're using our own satellites against us. And
          the clock is ticking. Hey, you know how I'm, like, always trying to
          save the planet? Here's my chance.
        </Text>
      </View>
      <View
        style={{ backgroundColor: "#BAD", flex: 1, width: "100%", padding: 20 }}
      >
        <Text
          style={{
            color: "#FFF",
            fontWeight: "800",
            fontSize: 30,
            marginBottom: 10,
          }}
        >
          Second one
        </Text>
        <Text style={{ color: "#FFF" }}>
          Must go faster... go, go, go, go, go! Eventually, you do plan to have
          dinosaurs on your dinosaur tour, right? Just my luck, no ice. This
          thing comes fully loaded. AM/FM radio, reclining bucket seats, and...
          power windows. Yeah, but your scientists were so preoccupied with
          whether or not they could, they didn't stop to think if they should.{" "}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#BADBAD",
          flex: 1,
          width: "100%",
          padding: 20,
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontWeight: "800",
            fontSize: 30,
            marginBottom: 10,
          }}
        >
          Third one
        </Text>
        <Text style={{ color: "#FFF" }}>
          Eventually, you do plan to have dinosaurs on your dinosaur tour,
          right? Hey, take a look at the earthlings. Goodbye! We gotta burn the
          rain forest, dump toxic waste, pollute the air, and rip up the OZONE!
          'Cause maybe if we screw up this planet enough, they won't want it
          anymore!{" "}
        </Text>
      </View>
    </Carousel>
  </View>
));
