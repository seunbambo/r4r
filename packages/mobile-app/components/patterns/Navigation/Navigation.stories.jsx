import React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { Navigation } from "./Navigation";
import { navigationIcons } from "./navigationIcons";

const Screen = ({ text }) => {
  return (
    <View style={{ backgroundColor: "#000", flex: 3 }}>
      <Text style={{ color: "#fff" }}>{text}!</Text>
    </View>
  );
};

const Screens = {
  Home: () => <Screen text="Home" />,
  Services: () => <Screen text="Services" />,
  AboutUs: () => <Screen text="About Us" />,
  Contact: () => <Screen text="Contact" />,
  Explore: () => <Screen text="Explore" />,
  Schedule: () => <Screen text="Schedule" />,
  Stats: () => <Screen text="Stats" />,
};

const LoggedInNavigation = [
  {
    name: "Home",
    component: Screens.Home,
    image: navigationIcons.home,
    options: {
      title: "Hello!",
    },
  },
  {
    name: "Explore",
    component: Screens.Explore,
    image: navigationIcons.explore,
  },
  {
    name: "Schedule",
    component: Screens.Schedule,
    image: navigationIcons.schedule,
  },
  {
    name: "Stats",
    component: Screens.Stats,
    image: navigationIcons.stats,
  },
];

const LoggedOutNavigation = [
  {
    name: "Home",
    component: Screens.Home,
    image: navigationIcons.home,
  },
  {
    name: "Services",
    component: Screens.Services,
    image: navigationIcons.services,
  },
  {
    name: "About Us",
    component: Screens.AboutUs,
    image: navigationIcons.aboutUs,
  },
  {
    name: "Contact",
    component: Screens.Contact,
    image: navigationIcons.contact,
  },
];

storiesOf("Navigation", module)
  .add("logged in", () => (
    <Navigation
      loggedInNavigation={LoggedInNavigation}
      loggedOutNavigation={LoggedOutNavigation}
      isLoggedIn
    />
  ))
  .add("logged out", () => (
    <Navigation
      loggedInNavigation={LoggedInNavigation}
      loggedOutNavigation={LoggedOutNavigation}
      isLoggedIn={false}
    />
  ));
