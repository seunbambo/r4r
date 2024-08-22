import React from "react";

import {
  GradientBackground,
  TabButton,
  TabRow,
  Text,
} from "./Navigation.styles";

// Some of the structure from this component comes from the
// react-navigation docs (although it's been a bit customized from there)
export const CustomNavbar = ({ state, descriptors, navigation }) => {
  return (
    <TabRow style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabButton
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
          >
            {isFocused && <GradientBackground />}

            {options.tabBarIcon({ focused: isFocused })}
            <Text fontSize={14} isFocused={isFocused}>{label}</Text>
          </TabButton>
        );
      })}
    </TabRow>
  );
};
