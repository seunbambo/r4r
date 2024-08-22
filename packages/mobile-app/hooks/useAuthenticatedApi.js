import { handleResponse, handleError } from "../utils/response";
import { getBeBaseUrl } from "../services";
import { useApi, useCached } from "./useApi";

export const useAuthenticatedApi = () => {
  return useApi(true);
};

export const usePostAccomplishment = () => {
  const api = useAuthenticatedApi();

  const postAccomplishment = async (data) => {
    try {
      const response = await api.post("/accomplishments", { data });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  };

  return postAccomplishment;
};

export const useGetUser = () => {
  const { data, error, mutate } = useCached("/users/me", true);

  return { data: data?.data, error, mutate };
};

export const useGetProfile = () => {
  const { data, error, mutate } = useCached("/profiles", true);

  return { data: data?.data, error, mutate };
};

export const useGetSoberDate = () => {
  const { data, error, mutate } = useCached("/profile/sober", true);

  return { data: data?.data, error, mutate };
};

export const usePostSoberDate = () => {
  const api = useAuthenticatedApi();
  const { mutate } = useGetSoberDate();

  const postSoberDate = async (formData) => {
    try {
      const response = await api.post(
        `${getBeBaseUrl()}/profile/sober`,
        formData,
      );
      mutate();
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  };

  return postSoberDate;
};

export const useGetArticles = () => {
  const { data, error, mutate } = useCached("/articles", true);

  return { data: data?.data, error, mutate };
};

export const useGetSuccessStories = () => {
  const { data, error, mutate } = useCached("/success-stories", true);

  return { data: data?.data, error, mutate };
};

export const usePostPassword = () => {
  const api = useAuthenticatedApi();

  const postPassword = async (formData) => {
    try {
      const response = await api.post("/password", formData);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  };
  return postPassword;
};

export const useExploreHeading = () => {
  const { data, error, mutate } = useCached("/explore", true);

  return { data: data?.data, error, mutate };
};