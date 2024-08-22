import React, { useEffect, useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity } from "react-native";
import { CustomNavbar } from "./CustomNavbar";
import { TabIcon } from "./TabIcon";
import { Image, PillButton } from "../../atoms";
import { useNavigationProperties } from "../../../hooks/navigationProperties";
import Settings from "../../../assets/images/settings.png";
import { useAuthCtx } from "../../../contexts/AuthContext";
import { getItem } from "../../../utils/storage";

const Tab = createBottomTabNavigator();

export function Navigation({
  isLoggedIn,
  loggedInNavigation,
  loggedOutNavigation,
  ...rest
}) {
  const theme = useTheme();
  const authCtx = useAuthCtx();
  const navigation = useNavigation();
  const navItems = isLoggedIn ? loggedInNavigation : loggedOutNavigation;
  const defaultOptions = useNavigationProperties(true);

  return (
    <Tab.Navigator
      activeColor={theme.colors.white}
      screenOptions={{
        tabBarItemStyle: {
          paddingTop: 10,
          paddingBottom: 32,
          fontSize: 10,
        },
        tabBarActiveTintColor: theme.colors.green,
        tabBarStyle: {
          borderTopColor: theme.colors.borderDark,
          borderTopWidth: 1,
          backgroundColor: theme.colors.black,
          height: 90,
          fontSize: 10,
        },
      }}
      barStyle={{
        backgroundColor: theme.colors.backdrop,
        fontSize: 10,
      }}
      labeled
      shifting={false}
      style={{ backgroundColor: theme.colors.backdrop }}
      tabBar={(props) => <CustomNavbar {...props} />}
      {...rest}
    >
      {navItems.map((navProps) => (
        <Tab.Screen
          key={navProps.name}
          name={navProps.name}
          component={navProps.component}
          screenOptions={{
            ...navProps.options,
          }}
          options={{
            ...navProps.options,
            ...defaultOptions,
            tabBarIcon: ({ focused }) => (
              <TabIcon image={navProps.image} focused={focused} />
            ),
            headerRight: (props) =>
              authCtx.token ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Settings", { itemSlug: "settings" });
                  }}
                >
                  <Image imageSource={Settings} variant="smallSquare" />
                </TouchableOpacity>
              ) : (
                <PillButton
                  marginRight={10}
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                  title="Log In"
                />
              ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
