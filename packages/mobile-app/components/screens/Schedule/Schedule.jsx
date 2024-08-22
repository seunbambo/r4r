import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import moment from "moment";

// Styles
import { useNavigation } from "@react-navigation/native";
import {
  CardWrapper,
  ChevronLeft,
  ChevronRight,
  Container,
  StyledImageBackground,
  TopRightWrapper,
  TopTextWrapper,
  TopWrapper,
  Touch,
  Wrapper,
} from "./Schedule.styles";

// Components
import { PillButton, StyledText } from "../../atoms";
import { ScheduleList } from "../../patterns/ScheduleList";
import { capitalize, uppercase } from "../../../utils/string";
import { useSchedule } from "../../../contexts/Schedule";
import { useAmplitude } from "../../../hooks/useAmplitude";
import HeroBackgroundImage from "../../../assets/images/hero-background.jpg";
import { ScreenHeader } from "../../patterns";
import grid from "../../../assets/images/grid.png";
import list from "../../../assets/images/list.png";
import { useGroupPages } from "../../../contexts/GroupPagesContext";
import { getServicesHeadings } from "../Services/data";
import { Layout } from "../../patterns/Layout";
import { Post } from "../../patterns/Post";

export const Schedule = () => {
  const [date, setDate] = useState(
    moment().startOf("week").add(1, "days").format("MMM D"),
  );
  const { showScheduleContent } = useSchedule();
  useAmplitude(Schedule.displayName);
  const { width } = useWindowDimensions();
  const [isGridOrList, setIsGridOrList] = useState(true);
  const [content, setContent] = useState(undefined);
  const { groupIndexContent } = useGroupPages();
  const [isLoadingContent, setIsLoadingContent] = useState(true);

  const navigation = useNavigation();

  const rightAction = () => {
    setIsGridOrList(!isGridOrList);
  };

  const formatServicesContent = useCallback(() => {
    return {
      ...(groupIndexContent || {}),
    };
  }, [groupIndexContent]);

  useEffect(() => {
    const loadContent = async () => {
      const servicesHeadings = await getServicesHeadings();
      setContent(formatServicesContent(servicesHeadings));
    };

    loadContent();
  }, [formatServicesContent]);

  useEffect(() => {
    if (content || showScheduleContent) {
      setIsLoadingContent(false);
    }
  }, [content, showScheduleContent]);

  if (isLoadingContent) {
    return <ActivityIndicator />;
  }

  const nextDate = () => {
    setDate(moment(date).add(1, "weeks").format("MMM D"));
  };

  const previousDate = () => {
    setDate(moment(date).subtract(1, "weeks").format("MMM D"));
  };

  return (
    <Container>
      <ScreenHeader
        rightAction={rightAction}
        rightIcon={isGridOrList ? grid : list}
        centerItem={isGridOrList ? "Schedule" : "Group"}
      />

      {isGridOrList ? (
        <Wrapper>
          <TopWrapper>
            <PillButton
              title="This week"
              variant="quaternary"
              onPress={() =>
                setDate(moment().startOf("week").add(1, "days").format("MMM D"))
              }
            />
            <TopTextWrapper>
              <StyledText fontWeight="bold" variant="small" opacity="medium">
                {uppercase("week of")}
              </StyledText>
              <StyledText fontWeight="bold" variant="small" opacity="default">
                {capitalize(date)}
              </StyledText>
            </TopTextWrapper>
            <TopRightWrapper>
              <Touch onPress={previousDate}>
                <ChevronLeft />
              </Touch>
              <Touch onPress={nextDate}>
                <ChevronRight />
              </Touch>
            </TopRightWrapper>
          </TopWrapper>

          <StyledImageBackground
            source={HeroBackgroundImage}
            width={width}
            resizeMode="cover"
          >
            {Object.keys(showScheduleContent[0]?.data).map((day, index) => {
              return (
                <ScheduleList
                  scheduleData={showScheduleContent}
                  day={day}
                  key={index}
                />
              );
            })}
          </StyledImageBackground>
        </Wrapper>
      ) : (
        <Wrapper title={content?.groups?.title}>
          <StyledImageBackground
            source={HeroBackgroundImage}
            width={width}
            resizeMode="cover"
          >
            <Layout width={`${Dimensions.get("window").width / 2 - 15}`}>
              {content?.groups?.items.map((group) => (
                <CardWrapper key={group.title}>
                  <Post
                    centered
                    title={group.title}
                    alignment="center"
                    lineHeight={18}
                    onPress={() => {
                      navigation.navigate("Group", {
                        itemSlug: group.itemSlug,
                        title: group.title,
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
          </StyledImageBackground>
        </Wrapper>
      )}
    </Container>
  );
};

Schedule.displayName = "Schedule";
