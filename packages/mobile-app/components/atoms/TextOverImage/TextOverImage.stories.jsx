import React from "react";
import { storiesOf } from "@storybook/react-native";
import { TextOverImage } from "./TextOverImage";
import RunningImage from "../../../assets/images/Racing-For-Recovery-About-Running.png"

storiesOf("TextOverImage", module)
  .add("TextOverImage", () => <TextOverImage backgroundImage={RunningImage} padding={80} upperText="Testing text" height={200} />)
  .add("TextOverImage with lower text", () => <TextOverImage backgroundImage={RunningImage} upperText="Testing text" lowerText="Our mission at Racing For Recovery™ is to prevent all forms of substance abuse by promoting a lifestyle of fitness and health for all those affected by addiction." height={200} upperTextPadding={10} />);
