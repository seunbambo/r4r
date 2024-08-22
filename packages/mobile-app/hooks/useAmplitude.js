import { track } from "@amplitude/analytics-react-native";
import { useEffect } from "react";
import { amplitudeEvents } from "../utils/amplitudeEvents";

export const useAmplitude = (displayName) => {
  // track initial render for a component (screen)
  const amplitudeEvent = `${amplitudeEvents[displayName]} Screen Render`;
  useEffect(() => {
    track(amplitudeEvent);
  }, []);
};
