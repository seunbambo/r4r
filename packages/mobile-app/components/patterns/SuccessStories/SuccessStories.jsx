import React from "react";
import { Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { IconListItem } from "../IconList";
import { Card } from "../../atoms/Card";
import { PillButton, StyledText } from "../../atoms";
import { Section } from "../Section";

import CalendarIcon from "../../../assets/images/calendar_icon.png";
import { shortenString } from "../../../utils/string";
import Play from "../../../assets/images/play3x.png";

export const SuccessStories = ({ stories, smallView, onPress, onViewAll }) => {
  const Wrapper = smallView ? React.Fragment : ScrollView;
  const localStories = (smallView ? stories.slice(0, 3) : stories) || [];
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Wrapper>
      {localStories.length > 0 ? (
        <Section title="Success Stories" titleIconImage={CalendarIcon}>
          {localStories.map((story) => (
            <Card style={{ marginBottom: theme.spacing.medium }} key={story.id}>
              <IconListItem
                onPress={() => {
                  onPress(story);
                  navigation.navigate("SuccessStory", {
                    title: story?.title,
                    story,
                  });
                }}
                image={
                  <Image source={Play} style={{ height: 54, width: 54 }} />
                }
                title={story.title}
                subtitle={shortenString(story.description, 100)}
                showIconRight
              />
            </Card>
          ))}
          {smallView && (
            <PillButton style={{ width: "50%" }} onPress={onViewAll}>
              <StyledText variant="sm">See All Episodes</StyledText>
            </PillButton>
          )}
        </Section>
      ) : (
        <StyledText>No stories currently.</StyledText>
      )}
    </Wrapper>
  );
};
