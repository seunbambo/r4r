import Storybook from "./components";
import Router from "./Router";
// Util

const environments = {
  storybook: "storybook",
  development: "development",
  staging: "staging",
  production: "production",
};

const environmentConfig = {
  storybook: {
    component: Storybook,
  },
  development: {
    component: Router,
  },
};

const currentConfig = environments.development;
export const config = {
  environment: currentConfig,
  component: environmentConfig[currentConfig].component,
};
