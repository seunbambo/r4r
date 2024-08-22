import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";

// Styles
import { Container } from "./Group.styles";

// Components
import { InfoOrGroup } from "../../patterns";

// Contexts and hooks
import { useGroupPages } from "../../../contexts/GroupPagesContext";
import { useAmplitude } from "../../../hooks/useAmplitude";

export const Group = ({ route, navigation }) => {
  const { itemSlug, title } = route?.params || {};
  const { groupShowContent } = useGroupPages(itemSlug);
  useAmplitude(Group.displayName);

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  if (!groupShowContent) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <InfoOrGroup {...groupShowContent} />
    </Container>
  );
};

Group.displayName = "Group";
