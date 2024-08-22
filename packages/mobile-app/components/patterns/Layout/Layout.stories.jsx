/* eslint-disable global-require */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Layout } from "./Layout";
import { Post } from "../Post";

storiesOf("Layout", module)
  .add("horizontal", () => (
    <Layout type="horizontalList">
      <Post
        variant="large"
        title="This is the title"
        subtitle="This is a subtitle"
        image={require("../../../assets/images/placeholder.png")}
      />
      <Post
        variant="large"
        title="This is the title"
        subtitle="This is a subtitle"
        image={require("../../../assets/images/placeholder.png")}
      />
      <Post
        variant="large"
        title="This is the title"
        subtitle="This is a subtitle"
        image={require("../../../assets/images/placeholder.png")}
      />
    </Layout>
  ))
  .add("side-by-side grid", () => (
    <Layout>
      <Post
        variant="large"
        title="This is the title"
        subtitle="This is a subtitle"
        image={require("../../../assets/images/placeholder.png")}
      />
      <Post
        variant="large"
        title="This is the title"
        subtitle="This is a subtitle"
        image={require("../../../assets/images/placeholder.png")}
      />
      <Post
        variant="large"
        title="This is the title"
        subtitle="This is a subtitle"
        image={require("../../../assets/images/placeholder.png")}
      />
    </Layout>
  ));
