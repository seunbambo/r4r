import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { capitalize } from "../../../utils/string";
import PageContainer from "../../atoms/PageContainer";
import { TextList } from "../../patterns/TextList";
import { SettingsWrapper } from "./Settings.styles";
import { useAmplitude } from "../../../hooks/useAmplitude";

const mockSettingsData = async () => {
  return [
    // {
    //   id: 2,
    //   name: "notifications",
    // },
    { id: 1, name: "password" },
    {
      id: 3,
      name: "Set Sober Start Date",
    },
    {
      id: 4,
      name: "terms of service",
    },
    {
      id: 5,
      name: "log out",
    },
  ];
};

export const Settings = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [content, setContent] = useState(undefined);

  const navigation = useNavigation();
  useAmplitude(Settings.displayName);

  useEffect(() => {
    const loadContent = async () => {
      const localContent = await mockSettingsData();
      setContent(localContent);
      setIsLoadingContent(false);
    };

    loadContent();
  }, []);

  if (isLoadingContent) {
    return <ActivityIndicator />;
  }

  return (
    <PageContainer>
      <SettingsWrapper>
        {content.map(({ id, name }) => {
          return (
            <TextList
              key={id}
              text={capitalize(name)}
              onPress={() =>
                navigation.navigate(capitalize(name), { itemSlug: "settings" })
              }
            />
          );
        })}
      </SettingsWrapper>
    </PageContainer>
  );
};

Settings.displayName = "Settings";
