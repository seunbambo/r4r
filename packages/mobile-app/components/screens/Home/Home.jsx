/* eslint-disable global-require */
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { track } from "@amplitude/analytics-react-native";
import { format } from "date-fns";
import { Space, PaddedSection } from "./Home.styles";
import PageContainer from "../../atoms/PageContainer";
import { Hero } from "../../atoms/Hero";
import { HeroText } from "../../atoms/HeroText";
import { CallToAction } from "../../atoms/CallToAction";

import { Section } from "../../patterns/Section";
import { Post } from "../../patterns/Post";
import { Layout } from "../../patterns/Layout";
import { ContentArea } from "../../atoms/ContentArea";
import { LiveStream } from "../LiveStream";

// Hooks
import { useGroupPages } from "../../../contexts/GroupPagesContext";
import { useHome } from "../../../contexts/Home";

const getHomeContent = async () => {
  return {
    heroHeading: "Welcome",
    heroSubheading: "We're right there with you. Every Day.",
    introSection: {
      title: "Who we are",
    },
    introPost: {
      title: "What is Racing for Recovery?",
      imageProps: { imageSource: require("./who_we_are.jpg") },
    },
    books: {
      category: "book",
      items: [
        {
          itemSlug: "bookOne",
          title: "From Addict to Ironman",
          subtitle: "Paperback & Audio CD",
          imageProps: {
            imageSource: require("./from_addict_to_ironman.jpg"),
          },
        },
        {
          itemSlug: "bookTwo",
          title: "There’s More Than One Way to Get to Cleveland",
          subtitle: "Paperback & Audio CD",
          imageProps: {
            imageSource: require("./theres_more_than_one_way.jpg"),
          },
        },

        {
          itemSlug: "bookThree",
          title: "Choices & Consequences",
          subtitle: "Book",
          imageProps: {
            imageSource: require("./choices_and_consequences.png"),
          },
        },
      ],
    },
    films: {
      category: "film",
      items: [
        {
          itemSlug: "filmOne",
          title: "Addict",
          subtitle: "Film",
          imageProps: { imageSource: require("./addict.png") },
        },
        {
          itemSlug: "filmTwo",
          title: "Running With Demons",
          subtitle: "Film",
          imageProps: { imageSource: require("./running_with_demons.jpg") },
        },
        {
          itemSlug: "filmThree",
          title: "Pure Euphoria",
          subtitle: "Film",
          imageProps: { imageSource: require("./pure_euphoria.png") },
        },
      ],
    },
    liveStream: {
      title: "Live Stream",
      streamUrl: "https://www.facebook.com/pg/RacingforRecovery/posts/",
      post: {
        title: "Join our Live Stream",
        subtitle: "Wednesday February 22 - 8:00PM",
        imageProps: { imageSource: require("./live_stream.png") },
      },
    },
    social: {
      title: "Join our social community",
      items: [
        {
          title: "Instagram",
          imageProps: {
            imageSource: require("./instagram.png"),
          },
          link: "https://www.instagram.com/racingforrecovery",
        },
        {
          title: "YouTube",
          imageProps: {
            imageSource: require("./youtube.png"),
          },
          link: "https://www.youtube.com/channel/UCqZTmCJvMUwWW05mzPQ6X0w",
        },
        {
          title: "Twitter",
          imageProps: {
            imageSource: require("./twitter.png"),
          },
          link: "https://twitter.com/Racing4Recovery",
        },
        {
          title: "Facebook",
          imageProps: {
            imageSource: require("./facebook.png"),
          },
          link: "https://www.facebook.com/RacingforRecovery/",
        },
      ],
    },
    callToAction: {
      title: "Donate to Racing For Recovery",
      buttonText: "Donate",
      link: "https://www.gofundme.com/f/c27p57-racing-for-recovery?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1",
    },
  };
};

// const HomeStack = createStackNavigator();

export const Home = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [content, setContent] = useState(undefined);
  const navigation = useNavigation();

  const { startTimeCtx } = useHome();

  useGroupPages(); // Trigger getting of Group pages data

  useEffect(() => {
    const loadContent = async () => {
      const localContent = await getHomeContent();
      setContent(localContent);
      setIsLoadingContent(false);

      const endTime = Date.now();
      track("Home Screen Loaded With Time", {
        loadTime: (endTime - startTimeCtx) / 1000,
      });
    };

    loadContent();
  }, []);

  if (isLoadingContent) {
    return <ActivityIndicator />;
  }

  return (
    <PageContainer>
      <Hero>
        <HeroText
          upperText={content.heroHeading}
          lowerText={content.heroSubheading}
        />
      </Hero>
      <ContentArea>
        <Section title={content.introSection.title}>
          <Post
            variant="large"
            title={content.introPost.title}
            imageProps={content.introPost.imageProps}
            onPress={() => {
              navigation.navigate("About Us");
            }}
          />
        </Section>
        <PaddedSection title={`${content.books.category}s`}>
          <Layout type="horizontalList" width={155}>
            {content.books.items.map((book, i) => (
              <Post
                title={book.title}
                subtitle={book.subtitle}
                imageProps={{ ...book.imageProps, height: 130, width: 155 }}
                lineHeight={17}
                key={i}
                onPress={() => {
                  navigation.navigate("Resources", {
                    itemSlug: book.itemSlug,
                    title: content.books.category,
                  });
                }}
              />
            ))}
          </Layout>
        </PaddedSection>
        <PaddedSection title={`${content.films.category}s`}>
          <Layout type="horizontalList" width={155}>
            {content.films.items.map((film, i) => (
              <Post
                title={film.title}
                subtitle={film.subtitle}
                imageProps={{ ...film.imageProps, height: 130, width: 155 }}
                key={i}
                lineHeight={17}
                onPress={() => {
                  navigation.navigate("Resources", {
                    itemSlug: film.itemSlug,
                    title: content.films.category,
                  });
                }}
              />
            ))}
          </Layout>
        </PaddedSection>
        <LiveStream
          inline
          sectionTitle={content.liveStream.title}
          onPress={() => {
            navigation.navigate("LiveStream");
          }}
        />
        <PaddedSection title={content.social.title}>
          <Layout width={`${Dimensions.get("window").width / 2 - 20}`}>
            {content.social.items.map((social, index) => (
              <Post
                title={social.title}
                key={index}
                lineHeight={15}
                imageProps={{
                  ...social.imageProps,
                  width: Dimensions.get("window").width / 2 - 20,
                  height: 124,
                }}
                onPress={() => {
                  Linking.openURL(social.link);
                }}
              />
            ))}
          </Layout>
        </PaddedSection>
        <Space />
        <CallToAction
          text={content.callToAction.title}
          buttonText={content.callToAction.buttonText}
          onPress={() => {
            Linking.openURL(content.callToAction.link);
          }}
        />
        <Space />
      </ContentArea>
    </PageContainer>
  );
};
