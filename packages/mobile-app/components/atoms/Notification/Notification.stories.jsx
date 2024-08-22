import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { Notification } from "./Notification";
import {
  NotificationProvider,
  useDisplayNotification,
} from "../../../contexts/Notification";

const NotificationWrapper = ({ ...props }) => {
  const [visible, setVisible] = React.useState(false);

  const handleToggle = () => setVisible(!visible);
  const handleDismiss = () => setVisible(false);

  return (
    <View style={{ marginTop: 40 }}>
      <Button onPress={handleToggle}>{visible ? "Hide" : "Show"}</Button>
      <Notification visible={visible} onDismiss={handleDismiss} {...props}>
        Hey 🙌 This is a notification!
      </Notification>
    </View>
  );
};

const ShowNotificationViaHook = () => {
  const displayNotification = useDisplayNotification();

  return (
    <Button
      onPress={() => {
        displayNotification("Hello this is via the hook", "error");
      }}
    >
      Show notification
    </Button>
  );
};

storiesOf("Notification", module)
  .add("default (primary)", () => <NotificationWrapper />)
  .add("As error", () => <NotificationWrapper variant="error" />)
  .add("Via Provider", () => (
    <NotificationProvider>
      <View style={{ marginTop: 40 }}>
        <ShowNotificationViaHook />
      </View>
    </NotificationProvider>
  ));
