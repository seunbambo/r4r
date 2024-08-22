import React, { useEffect, useState } from "react";
import { View } from "react-native";
import * as Network from "expo-network";
import { useDisplayNotification } from "../../../contexts/Notification";
import { StyledText } from "../../atoms";

const OFFLINE_CHECK_INTERVAL = 10000;

export const OfflineCheck = () => {
  const displayNotification = useDisplayNotification();
  useEffect(() => {
    // We're going to check the network state at the given interval
    const interval = setInterval(async () => {
      const localNetworkState = await Network.getNetworkStateAsync();

      if (localNetworkState.isInternetReachable === false) {
        displayNotification(
          <StyledText>
            Connect via cellular data or use Wi-Fi to load additional data.
          </StyledText>,
          "error",
        );
      }
    }, OFFLINE_CHECK_INTERVAL);

    // return a method that clears the interval so we get rid of the timer when the component unmounts
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return null;
};
