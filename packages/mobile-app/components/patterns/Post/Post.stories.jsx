/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import { Post } from "./Post";

storiesOf("Post", module).add("default (primary)", () => (
  <View style={{ padding: 20 }}>
    <Post
      variant="large"
      title="This is the title"
      subtitle="This is a subtitle"
      imageProps={{
        // eslint-disable-next-line global-require
        imageSource: require("../../../assets/images/placeholder.png"),
      }}
    />
  </View>
));
