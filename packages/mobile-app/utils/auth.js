import AsyncStorage from "@react-native-async-storage/async-storage";

let auth = "false";
export const isAuthenticated = async () => {
  auth = await AsyncStorage.getItem("isAuthenticated");
  return auth;
};