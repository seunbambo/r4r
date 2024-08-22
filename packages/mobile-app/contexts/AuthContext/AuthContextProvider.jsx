// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";

import { createContext, useEffect, useMemo, useState } from "react";
import {
  track,
  Identify,
  identify,
  setDeviceId,
} from "@amplitude/analytics-react-native";
import { getItem, removeItem, setItem } from "../../utils/storage";
import { amplitudeEvents } from "../../utils/amplitudeEvents";

export const AuthContext = createContext({
  token: "",
  authenticate: () => null,
});

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();
  const [auth, setAuth] = useState(false);

  const authenticate = async (token) => {
    // debugger;
    setAuthToken(token);
    setAuth(true);
    await setItem("token", token);
    await setItem("isAuthenticated", auth);

    const first = await getItem("firstTimeLogin");
    if (!first) {
      await setItem("firstTimeLogin", true);
    }

    track(amplitudeEvents.logInSuccessful);
    // Add isLoggedIn user property to Amplitude tracking
    const identifyObj = new Identify();
    identifyObj.set("isLoggedIn", "true");
    identify(identifyObj);
  };

  const logout = async () => {
    setAuthToken(null);
    setAuth(false);
    await removeItem("token");
    await setItem("isAuthenticated", auth);

    track(amplitudeEvents.logOutSuccessful);
    // Remove isLoggedIn user property from Amplitude tracking
    const identifyObj = new Identify();
    identifyObj.remove("isLoggedIn", "true");
    identify(identifyObj);
  };

  const hasTokenExpired = (token) => {
    const { exp } = jwt_decode(token);

    return exp * 1000 > new Date().getTime();
  };

  const isLoggedIn = async () => {
    try {
      const userToken = await getItem("token");
      const tokenValid = hasTokenExpired(userToken);

      if (userToken) {
        setAuthToken(userToken);
        setAuth(true);
      }

      if (!tokenValid) {
        logout();
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, [auth, authToken]);

  const value = useMemo(
    () => ({
      token: authToken,
      authenticate,
      logout,
    }),
    [auth],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
