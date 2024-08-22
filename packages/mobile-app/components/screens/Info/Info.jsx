import React, { useEffect } from "react";
import { ActivityIndicator, Linking, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";

// Styles
import { BottomMargin, Container, LearnMore } from "./Info.styles";

// Components
import { CallToAction } from "../../atoms";
import { InfoOrGroup } from "../../patterns";

// Contexts and hooks
import { useInfoPages } from "../../../contexts/InfoPagesContext";
import { useAmplitude } from "../../../hooks/useAmplitude";

export const Info = ({ route, navigation }) => {
  const { itemSlug, title } = route?.params || {};
  const { infoShowContent } = useInfoPages(itemSlug);
  const navigationObj = useNavigation();
  const theme = useTheme();
  useAmplitude(Info.displayName);

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  const handleCtaPress = () => {
    navigationObj.navigate("Contact");
  };

  if (!infoShowContent) {
    return (
      <View style={{ backgroundColor: "#000", flex: 1 }}>
        <ActivityIndicator style={{ paddingTop: 8 }} />
      </View>
    );
  }

  return (
    <Container>
      <InfoOrGroup {...infoShowContent} />
      <LearnMore
        caps="uppercase"
        fontWeight="bold"
        color={theme.colors.green}
        onPress={() => Linking.openURL("https://www.racingforrecovery.org/")}
      >
        Learn More
      </LearnMore>
      <CallToAction
        text="Is Racing for Recovery right for you?"
        buttonText="Contact Us"
        onPress={() => {
          navigation.navigate("Contact", {});
        }}
        margin={10}
      />
      <BottomMargin />
    </Container>
  );
};

Info.displayName = "Info";
