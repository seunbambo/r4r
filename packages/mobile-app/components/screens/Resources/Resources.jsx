import React, { useEffect } from "react";
import { ActivityIndicator, Linking } from "react-native";

// Styles
import { Container, TopPadding } from "./Resources.styles";

// Components
import { Image, PillButton, StyledText } from "../../atoms";

// Context & Hooks
import { useResources } from "../../../contexts/Resources";
import { useAmplitude } from "../../../hooks/useAmplitude";

export const Resources = ({ route, navigation }) => {
  const { itemSlug, title } = route?.params || {};
  const { showResourcesContent } = useResources(itemSlug, title);
  useAmplitude(Resources.displayName);

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  if (!showResourcesContent) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <Image
        {...showResourcesContent}
        variant="fullWidth"
        imageSource={showResourcesContent.image}
        withoutBorder
        marginBottom={10}
      />
      <StyledText variant="subHeading" padding={10}>
        {showResourcesContent.title}
      </StyledText>
      <TopPadding>
        {showResourcesContent.buttons.map((button, i) => {
          return (
            <PillButton
              marginBottom={13}
              onPress={() => {
                Linking.openURL(button.link);
              }}
              title={button.buttonText}
              key={i}
            />
          );
        })}
        <StyledText variant="small" caps="uppercase">
          ABOUT
        </StyledText>
      </TopPadding>
      <StyledText variant="body" opacity="lighter" padding={10}>
        {showResourcesContent.detailsText}
      </StyledText>
    </Container>
  );
};

Resources.displayName = "Resources";
