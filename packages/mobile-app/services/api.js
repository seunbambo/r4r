import axios from "axios";
import Constants from "expo-constants";
import { BE_BASE_URL } from "@env";
import { handleResponse, handleError } from "../utils/response";
// import { AuthContext } from "../contexts/AuthContext";
import { getItem } from "../utils/storage";

export const getBeBaseUrl = () => {
  if (BE_BASE_URL) {
    return BE_BASE_URL;
  }
  return Constants.manifest.extra.beBaseUrl;
};

export const postContactUs = async (formData) => {
  try {
    const response = await axios.post(`${getBeBaseUrl()}/contact-us`, formData);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const login = async (identifier, password) => {
  try {
    const response = await axios.post(`${getBeBaseUrl()}/auth/local`, {
      identifier,
      password,
    });

    return handleResponse(response);
  } catch (error) {
    return handleError(error, false);
  }
};

export const getLivestreamTime = async () => {
  try {
    const response = await axios.get(`${getBeBaseUrl()}/livestream-time`);

    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
