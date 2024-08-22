import React from "react";
import { storiesOf } from "@storybook/react-native";
import { VideoPlayer } from "./VideoPlayer";

storiesOf("VideoPlayer", module)
  .add("video player", () => (
    <VideoPlayer
      videoId="zH9QxHhDjy4"
    />
  ));
