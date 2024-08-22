import React, { useEffect, useState } from "react";
import { ActivityIndicator, Linking } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ArticleWrapper, Container, Space } from "./ArticleScreen.styles";
import {
  Article,
  Image,
  PillButton,
  StyledText,
  SwitchButton,
  VideoPlayer,
} from "../../atoms";
import { useArticle } from "../../../contexts/Article";
import { useAmplitude } from "../../../hooks/useAmplitude";
import { getImageURL } from "../../../utils/article";

export const ArticleScreen = ({ route }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const navigation = useNavigation();
  useAmplitude(ArticleScreen.displayName);

  const { itemSlug, title, article } = route?.params || {};

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <Container>
      {(article.type === "Articles" || article.type === "Podcast") &&
      !article.videoID
        ? article?.image && (
            <Image
              variant="fullWidth"
              withoutBorder
              marginBottom={10}
              imageUri={getImageURL(article?.image)}
            />
          )
        : article.videoID && <VideoPlayer videoId={article.videoID} />}
      <ArticleWrapper>
        {title && <StyledText variant="subHeading">{title}</StyledText>}
        <Space />
        {article.articleUrl && (
          <PillButton
            marginBottom={13}
            onPress={() => {
              Linking.openURL(article.articleUrl);
            }}
            title="Read the Article"
          />
        )}

        {article.content && (
          <StyledText variant="body">{article.content}</StyledText>
        )}
      </ArticleWrapper>
    </Container>
  );
};

ArticleScreen.displayName = "ArticleScreen";
