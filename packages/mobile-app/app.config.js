const stagingIcon = "./assets/app-icon-512-staging.png";
const stagingIdentifier = "staging.racingForRecovery.app";
const productionIdentifier = "com.racingForRecovery.app";

export default ({ config }) => {
  const isStaging = process.env.MY_ENV === "staging";
  const iconCommon = isStaging ? stagingIcon : "./assets/app-icon-1024.png";
  const iconAndroid = isStaging
    ? stagingIcon
    : "./assets/app-icon-512-front.png";
  const platformIdentifier = isStaging
    ? stagingIdentifier
    : productionIdentifier;

  return {
    ...config,
    extra: {
      eas: {
        projectId: "041c7fb0-fbd9-400d-99a5-dc08295a8800",
      },
      beBaseUrl: isStaging
        ? "https://cms-staging-racingforrecovery.herokuapp.com/api"
        : "https://racingforrecoverycms.herokuapp.com/api",
      clientBaseUrl: isStaging
        ? "https://staging-r4r.herokuapp.com"
        : "https://app.racingforrecovery.org",
      bugsnag: {
        apiKey: process.env.BUGSNAG_API,
      },
      amplitudeKey: isStaging
        ? process.env.AMPLITUDE_STAGING
        : process.env.AMPLITUDE_PRODUCTION,
    },
    icon: iconCommon,
    ios: {
      supportsTablet: true,
      bundleIdentifier: platformIdentifier,
    },
    android: {
      package: platformIdentifier,
      icon: iconAndroid,
      adaptiveIcon: {
        foregroundImage: iconAndroid,
        backgroundColor: "#000000",
      },
    },
  };
};
