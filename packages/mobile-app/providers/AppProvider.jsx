import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import theme from "../assets/styles/Theme";

// Context Providers
import { GroupPagesContextProvider } from "../contexts/GroupPagesContext";
import { InfoPagesContextProvider } from "../contexts/InfoPagesContext";
import { ResourcesContextProvider } from "../contexts/Resources";
import { ArticleContextProvider } from "../contexts/Article";
import { AuthContextProvider } from "../contexts/AuthContext";
import { ContactUsContextProvider } from "../contexts/ContactUs";
import { ScheduleContextProvider } from "../contexts/Schedule";
import { HomeContextProvider } from "../contexts/Home";
import { NotificationProvider } from "../contexts/Notification";

export const AppProvider = ({ children, navigationProps, ...rest }) => {
  return (
    <StyledThemeProvider theme={theme} {...rest}>
      <HomeContextProvider startTime={rest?.startTime}>
        <AuthContextProvider>
          <BottomSheetModalProvider>
            <ScheduleContextProvider>
              <ContactUsContextProvider>
                <ArticleContextProvider>
                  <GroupPagesContextProvider>
                    <InfoPagesContextProvider>
                      <ResourcesContextProvider>
                        <NavigationContainer {...navigationProps} theme={theme}>
                          <NotificationProvider>
                            {children}
                          </NotificationProvider>
                        </NavigationContainer>
                      </ResourcesContextProvider>
                    </InfoPagesContextProvider>
                  </GroupPagesContextProvider>
                </ArticleContextProvider>
              </ContactUsContextProvider>
            </ScheduleContextProvider>
          </BottomSheetModalProvider>
        </AuthContextProvider>
      </HomeContextProvider>
    </StyledThemeProvider>
  );
};
