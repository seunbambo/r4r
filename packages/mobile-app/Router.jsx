import React from "react";
import styled from "styled-components/native";

import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";

// Components
import { Navigation } from "./components/patterns/Navigation";
import { navigationIcons } from "./components/patterns/Navigation/navigationIcons";
import { Home } from "./components/screens/Home";
import { ContactUs } from "./components/screens/ContactUs";
import { About } from "./components/screens/About";
import { Services } from "./components/screens/Services";
import { Info } from "./components/screens/Info";
import { Group } from "./components/screens/Group";
import { Resources } from "./components/screens/Resources";
import { screens } from "./screens";
import { Terms } from "./components/screens/Terms";
import { Login } from "./components/screens/Login";
import { LiveStream } from "./components/screens/LiveStream";
import { Settings } from "./components/screens/Settings";
import { Stats } from "./components/screens/Stats";
import { LogoutConfirmation } from "./components/screens/LogoutConfirmation";

// Hooks
import { useNavigationProperties } from "./hooks/navigationProperties";

import { Schedule } from "./components/screens/Schedule";
import { ArticleIndex } from "./components/screens/ArticleIndex";
import { ArticleScreen } from "./components/screens/Article";
import { WelcomeOnboarding } from "./components/screens/WelcomeOnboarding";
import { WelcomeOnboarding2 } from "./components/screens/WelcomeOnboarding2";
import { HomeLoggedIn } from "./components/screens/HomeLoggedIn";
import { Explore } from "./components/screens/Explore";
import { useAuthCtx } from "./contexts/AuthContext";
import { fontSizes } from "./assets/styles/Theme";
import { ResetCounter } from "./components/screens/ResetCounter";
import { SoberStartDate } from "./components/screens/SoberStartDate";
import { SuccessStories, SuccessStory } from "./components/screens/SuccessStories";
import { Password } from "./components/screens/Password";

const Text = styled.Text``;
const View = styled.View``;

const Stack = createStackNavigator();

const headerTitleStyle = {
  fontSize: fontSizes.medium,
  fontFamily: "PoppinsBold",
  textTransform: "capitalize",
};

// TODO: This is here for example sake only and should
// be removed when more screens are available
const NotFound = () => (
  <View>
    <Text>Not Found</Text>
  </View>
);

const LoggedInNavigation = [
  {
    name: screens.homeLoggedIn.name,
    component: HomeLoggedIn,
    image: navigationIcons.home,
  },
  {
    name: screens.explore.name,
    component: Explore,
    image: navigationIcons.explore,
  },
  {
    name: screens.schedule.name,
    component: Schedule,
    image: navigationIcons.schedule,
    options: { headerShown: false }
  },
  {
    name: screens.stats.name,
    component: Stats,
    image: navigationIcons.stats,
  },
];

const LoggedOutNavigation = [
  {
    name: screens.home.name,
    component: Home,
    image: navigationIcons.home,
  },
  {
    name: screens.services.name,
    component: Services,
    image: navigationIcons.services,
  },
  {
    name: screens.about.name,
    component: About,
    image: navigationIcons.aboutUs,
  },
  {
    name: screens.contact.name,
    component: ContactUs,
    image: navigationIcons.contact,
  },
];

const TabRouter = () => {
  const authCtx = useAuthCtx();

  return (
    <Navigation
      loggedInNavigation={LoggedInNavigation}
      loggedOutNavigation={LoggedOutNavigation}
      isLoggedIn={authCtx.token}
    />
  );
};

const Router = () => {
  const defaultOptions = useNavigationProperties();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <Stack.Navigator>
        <Stack.Screen
          name={screens.homeNavigation.name}
          component={TabRouter}
          options={{ headerShown: false, title: screens.homeNavigation.title }}
        />
        <Stack.Screen
          name={screens.notFound.name}
          component={NotFound}
          options={{
            ...defaultOptions,
            title: screens.notFound.title,
          }}
        />
        <Stack.Screen
          name={screens.info.name}
          component={Info}
          options={{
            ...defaultOptions,
            title: screens.info.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.group.name}
          component={Group}
          options={{
            ...defaultOptions,
            title: screens.info.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.resources.name}
          component={Resources}
          options={{
            ...defaultOptions,
            title: screens.resources.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.login.name}
          component={Login}
          options={{
            ...defaultOptions,
            title: screens.login.title,
          }}
        />
        <Stack.Screen
          name={screens.terms.name}
          component={Terms}
          options={{
            ...defaultOptions,
            title: screens.terms.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.liveStream.name}
          component={LiveStream}
          options={{
            ...defaultOptions,
            title: screens.liveStream.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.schedule.name}
          component={Schedule}
          options={{
            ...defaultOptions,
            title: screens.schedule.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.articleIndex.name}
          component={ArticleIndex}
          options={{
            ...defaultOptions,
            title: screens.articleIndex.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.article.name}
          component={ArticleScreen}
          options={{
            ...defaultOptions,
            title: screens.article.title,
            // title: screens.article.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.settings.name}
          component={Settings}
          options={{
            ...defaultOptions,
            title: screens.settings.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.logoutConfirmation.name}
          component={LogoutConfirmation}
          options={{
            ...defaultOptions,
            title: screens.logoutConfirmation.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.welcome.name}
          component={WelcomeOnboarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={screens.secondWelcome.name}
          component={WelcomeOnboarding2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={screens.resetCounter.name}
          component={ResetCounter}
          options={{
            ...defaultOptions,
            title: screens.resetCounter.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.soberStartDate.name}
          component={SoberStartDate}
          options={{
            ...defaultOptions,
            title: screens.soberStartDate.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.successStories.name}
          component={SuccessStories}
          options={{
            ...defaultOptions,
            title: screens.successStories.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.successStory.name}
          component={SuccessStory}
          options={{
            ...defaultOptions,
            title: screens.successStory.title,
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name={screens.password.name}
          component={Password}
          options={{
            ...defaultOptions,
            title: screens.password.title,
            headerTitleStyle,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Router;
