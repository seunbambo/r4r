import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CardWrapper, PaddedSection } from "./Services.styles";
import { Post } from "../../patterns/Post";
import { Layout } from "../../patterns/Layout";
import { ContentArea } from "../../atoms/ContentArea";
import { Hero, HeroText } from "../../atoms";
import { PageContainer } from "../../atoms/PageContainer/PageContainer.styles";
import { getServicesHeadings } from "./data";

// Hooks
import { useInfoPages } from "../../../contexts/InfoPagesContext";
import { useGroupPages } from "../../../contexts/GroupPagesContext";
import { useAmplitude } from "../../../hooks/useAmplitude";

export const Services = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [content, setContent] = useState(undefined);
  const { infoIndexContent } = useInfoPages();
  const { groupIndexContent } = useGroupPages();
  useAmplitude(Services.displayName);

  const formatServicesContent = useCallback(
    (servicesHeadings) => {
      return {
        ...servicesHeadings,
        ...(infoIndexContent || {}),
        ...(groupIndexContent || {}),
      };
    },
    [infoIndexContent, groupIndexContent],
  );

  const navigation = useNavigation();

  useEffect(() => {
    const loadContent = async () => {
      const servicesHeadings = await getServicesHeadings();
      setContent(formatServicesContent(servicesHeadings));
    };

    loadContent();
  }, [formatServicesContent]);

  useEffect(() => {
    if (content) {
      setIsLoadingContent(false);
    }
  }, [content]);

  if (isLoadingContent) {
    return <ActivityIndicator />;
  }

  return (
    <PageContainer>
      <Hero>
        <HeroText
          upperText={content?.heroHeading}
          lowerText={content?.heroSubheading}
        />
      </Hero>
      <ContentArea>
        <PaddedSection title={content?.services?.title}>
          <Layout width={`${Dimensions.get("window").width / 2 - 20}`}>
            {content?.services?.items.map((service) => (
              <Post
                onPress={() => {
                  navigation.navigate("Info", {
                    itemSlug: service.itemSlug,
                    title: service.title,
                  });
                }}
                title={service.title}
                key={service.title}
                lineHeight={17}
                imageProps={{
                  ...service.imageProps,
                  width: Dimensions.get("window").width / 2 - 20,
                  height: 124,
                }}
              />
            ))}
          </Layout>
        </PaddedSection>
        <PaddedSection title={content?.groups?.title}>
          <Layout width={`${Dimensions.get("window").width / 2 - 20}`}>
            {content?.groups?.items.map((group) => (
              <CardWrapper key={group?.title}>
                <Post
                  centered
                  title={group?.title}
                  alignment="center"
                  lineHeight={18}
                  onPress={() => {
                    navigation.navigate("Group", {
                      itemSlug: group?.itemSlug,
                      title: group?.title,
                    });
                  }}
                  imageProps={{
                    ...group.imageProps,
                    width: 51,
                    height: 51,
                  }}
                  maxFontSizeMultiplier={1.2}
                />
              </CardWrapper>
            ))}
          </Layout>
        </PaddedSection>
      </ContentArea>
    </PageContainer>
  );
};

Services.displayName = "Services";
