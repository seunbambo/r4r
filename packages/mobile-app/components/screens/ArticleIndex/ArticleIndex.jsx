import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import PageContainer from "../../atoms/PageContainer";
import { Post } from "../../patterns/Post";
import { ContentArea } from "../../atoms/ContentArea";
import { ArticleWrapper } from "./ArticleIndex.styles";
import { shortenString } from "../../../utils/string";
import { getImageURL } from "../../../utils/article";
import { SuccessStories } from "../../patterns/SuccessStories";

export const ArticleIndex = ({ route }) => {
  const navigation = useNavigation();

  const { title, articles, stories } = route?.params || {};

  useEffect(() => {
    navigation.setOptions({
      title: title || "Articles",
    });
  }, [title, navigation]);

  return (
    <PageContainer>
      <ContentArea>
        {articles.map((article) => {
          return (
            <ArticleWrapper key={article.id}>
              <Post
                variant="large"
                title={shortenString(article?.title, 60)}
                imageProps={{
                  imageUri: getImageURL(article?.image),
                }}
                borderRadius={0}
                headingUnderlined
                onPress={() => {
                  navigation.navigate("Article", {
                    itemSlug: article.id,
                    title: article.title,
                    article,
                  });
                }}
              />
            </ArticleWrapper>
          );
        })}
        {stories && stories.length > 0 && (
          <SuccessStories
            stories={stories}
            smallView={false}
            onPress={(story) => {
              navigation.navigate("SuccessStory", {
                title: story?.title,
                story,
              });
            }}
          />
        )}
      </ContentArea>
    </PageContainer>
  );
};

ArticleIndex.displayName = "ArticleIndex";
