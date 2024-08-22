import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { Card } from "./Card.styles";
import { Post } from "../../patterns/Post";

storiesOf("Card", module).add("card", () => (
  <View style={{ width: "50%", margin: 80 }}>
    <Card>
      <Post
        centered
        title="This is a fake post"
        // eslint-disable-next-line global-require
        image={require("../../../assets/images/play1x.png")}
        imageProps={{ width: 80, height: 80 }}
      />
    </Card>
  </View>
));
