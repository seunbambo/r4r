import React from "react";
import { useWindowDimensions, Platform } from "react-native";
import { Layout } from "../components/patterns/Layout";
import Post from "../components/patterns/Post";
import { SuccessStories } from "../components/patterns/SuccessStories";
import { shortenString } from "./string";
import { getBeBaseUrl } from "../services";
import { PillButton } from "../components/atoms";

export const getImageURL = (imageUrl) => {
  if (Platform.OS === "ios" && __DEV__) {
    return `http://localhost:1337${imageUrl}`;
  }

  if (Platform.OS === "android" && __DEV__) {
    return `${getBeBaseUrl().slice(0, -4)}${imageUrl}`;
  }

  return imageUrl;
};

export const ShowFeaturedArticle = ({ articles, navigation }) => {
  const featuredArticle = articles.find((article) => article.featured);
  return (
    <Post
      variant="large"
      title={shortenString(featuredArticle?.title, 65)}
      imageProps={{
        imageUri: getImageURL(featuredArticle?.image),
        borderRadius: 10,
      }}
      borderRadius={0}
      key="featuredArticle"
      headingUnderlined
      onPress={() => {
        navigation.navigate("Article", {
          itemSlug: "featuredArticle",
          title: featuredArticle?.title,
          article: featuredArticle,
        });
      }}
    />
  );
};

export const ShowArticles = ({ articles, navigation }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <Layout width={`${width / 2 - 12}`}>
        {articles
          .filter((article) => !article.featured)
          .slice(0, 4)
          .map((article, index) => (
            <Post
              variant="medium"
              title={shortenString(article?.title, 55)}
              imageProps={{
                imageUri: getImageURL(article?.image),
                width: width / 2 - 15,
                height: 124,
              }}
              key={index}
              onPress={() => {
                navigation.navigate("Article", {
                  itemSlug: article.id,
                  title: article?.title,
                  article,
                });
              }}
            />
          ))}
      </Layout>
      <PillButton
        title="More Articles"
        onPress={() => {
          navigation.navigate("ArticleIndex", {
            articles,
          });
        }}
        style={{ width: "50%", marginBottom: "3%" }}
      />
    </>
  );
};

export const ShowSuccessStories = ({ stories, navigation }) => (
  <SuccessStories
    stories={stories}
    smallView
    onPress={(story) => {
      navigation.navigate("SuccessStory", {
        title: story?.title,
        story,
      });
    }}
    onViewAll={() => {
      navigation.navigate("SuccessStories", {
        stories,
      });
    }}
  />
);

export const filterArticles = (articles, filter) => {
  if (filter.length === 0) return articles;

  const filteredArticles = [];
  let allArticles = [...articles];

  filter.forEach((filterItem) => {
    const foundArt = allArticles.find((article) =>
      article.subjects.includes(filterItem),
    );
    if (foundArt) {
      filteredArticles.push(foundArt);
      allArticles = allArticles.filter((article) => article.id !== foundArt.id);
    }
  });

  return filteredArticles;
};
