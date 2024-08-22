import axios from "axios";
import useSWR from "swr";
import { useAuthCtx } from "../contexts/AuthContext";
import { getBeBaseUrl } from "../services";
import { handleError } from "../utils/response";

export const useApi = (includeToken) => {
  const authContext = useAuthCtx();
  // eslint-disable-next-line prefer-destructuring
  const token = authContext.token;

  if (!token && includeToken) {
    // eslint-disable-next-line no-throw-literal
    throw "Cannot retrieve user token";
  }

  const instance = axios.create({
    baseURL: getBeBaseUrl(),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const override = {
    ...instance,
    get: async (url, config) => {
      try {
        const output = await instance.get(url, config);
        return output;
      } catch (error) {
        console.error(error);
      }

      return null;
    },
  };

  return override;
};

export const useCached = (url, includeAuthentication) => {
  const api = useApi(includeAuthentication);
  const { data, error, mutate } = useSWR(url, api.get);

  if (error) {
    handleError(error);
  }

  return { data, error, mutate };
};

export const useGetAbout = () => {
  const { data, error, mutate } = useCached("/about", false);

  return { data: data?.data, error, mutate };
};