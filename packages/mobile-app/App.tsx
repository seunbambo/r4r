import React, { useEffect, useState } from "react";
import Bugsnag from "@bugsnag/expo";
import { init, track } from "@amplitude/analytics-react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { AMPLITUDE_DEV, BUGSNAG_API } from "@env";
import { AppProvider } from "./providers/AppProvider";
import { theme } from "./assets/styles";

import useFontLoaderAsync from "./hooks/useFontLoaderAsync";
import { config } from "./environment";
import { WithSplashScreen } from "./hooks/WithSplashScreen";
import { amplitudeEvents } from "./utils/amplitudeEvents";

import { OfflineCheck } from "./components/patterns/OfflineCheck/OfflineCheck";
// Configure Bugsnag release stages
const bugsnagReleaseStages = {
  production: "production",
  staging: "staging",
  localDev: "local-development",
};
let releaseStage = bugsnagReleaseStages.production;
if (process.env.NODE_ENV === "android" || process.env.NODE_ENV === "ios") {
  releaseStage = bugsnagReleaseStages.localDev;
} else if (process.env.MY_ENV === "staging") {
  releaseStage = bugsnagReleaseStages.staging;
}
// Conditions for tracking errors in local-development release stage
const enabledReleaseStages = [
  bugsnagReleaseStages.production,
  bugsnagReleaseStages.staging,
];
if (process.env.BUGSNAG_DEV) {
  enabledReleaseStages.push(bugsnagReleaseStages.localDev);
}

Bugsnag.start({
  apiKey: Constants.manifest.extra.bugsnag.apiKey || BUGSNAG_API,
  releaseStage,
  enabledReleaseStages,
});

const App = () => {
  const [startTime, setStartTime] = useState(undefined);
  useEffect(() => {
    setStartTime(Date.now());
    init(Constants.manifest.extra.amplitudeKey || AMPLITUDE_DEV);
    track(amplitudeEvents.appLoad);
  }, []);
  const isLoadingComplete = useFontLoaderAsync();

  if (!isLoadingComplete) {
    return null;
  }

  const Component = config.component;

  return (
    <>
      <StatusBar style={"light"} />
      <WithSplashScreen isAppReady={isLoadingComplete}>
        <PaperProvider theme={theme}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <AppProvider>
              <Component />
              <OfflineCheck />
            </AppProvider>
          </KeyboardAvoidingView>
        </PaperProvider>
      </WithSplashScreen>
    </>
  );
};

export default App;
