import { CLIENT_BASE_URL } from "@env";
import Constants from "expo-constants";

export const getClienBasetUrl = () => {
  if (CLIENT_BASE_URL) {
    return CLIENT_BASE_URL;
  }
  return Constants.manifest.extra.clientBaseUrl;
};
