import Bugsnag from "@bugsnag/expo";

const requestSuccessful = (statusCode) => statusCode >= 200 && statusCode < 300;

export const handleResponse = (response, storeJwt = false) =>
  new Promise((resolve, reject) => {
    if (requestSuccessful(response.status)) {
      if (response.status === 204) {
        resolve({});
        return;
      }

      let resolvedResponse = response.data;
      if (storeJwt) {
        resolvedResponse = { ...resolvedResponse, jwt: response.headers.jwt };
      }
      resolve(resolvedResponse);
    } else {
      reject(response);
    }
  });

export const handleError = (e, isBugsnagCaptured = true) => {
  try {
    if (isBugsnagCaptured) {
      Bugsnag.notify(new Error(e));
    }
    const {
      response: { status, data },
    } = e;

    if (status === 401) {
      return Promise.reject(data);
    }
    if (status === 500) {
      return Promise.reject(new Error("Something went wrong."));
    }
    return Promise.reject(data);
  } catch (error) {
    return Promise.reject(new Error("Network error."));
  }
};
