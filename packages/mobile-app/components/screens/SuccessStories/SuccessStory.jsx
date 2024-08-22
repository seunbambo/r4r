import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import {
  ArticleWrapper,
  Container,
} from "../Article/ArticleScreen.styles";
import {
  StyledText,
  VideoPlayer,
} from "../../atoms";

export const SuccessStory = ({ route }) => {
  const navigation = useNavigation();
  
  const { title, story } = route?.params || {};

  useEffect(() => {
    navigation.setOptions({
      title: title || "Story",
    });
  }, [title, navigation]);

  return (
    <Container>
      { story?.videoID &&
        <VideoPlayer videoId={story.videoID} />
      }
      <ArticleWrapper>
        {story?.description && (
          <StyledText variant="body">{story.description}</StyledText>
        )}
      </ArticleWrapper>
    </Container>
  );
};
