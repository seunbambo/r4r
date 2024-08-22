import React, { useEffect, useState, useMemo, useRef } from "react";
import { ActivityIndicator, useWindowDimensions, View } from "react-native";
import moment from "moment";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { track } from "@amplitude/analytics-react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ScheduleList } from "../../patterns/ScheduleList";
import CalendarIcon from "../../../assets/images/calendar_icon.png";
import { lowercase } from "../../../utils/string";
// Components
import PageContainer from "../../atoms/PageContainer";
import { HeroText } from "../../atoms/HeroText";
import { PillButton } from "../../atoms/PillButton/PillButton";
import { Section } from "../../patterns/Section";
import { Layout } from "../../patterns/Layout";
import { Carousel } from "../../patterns/Carousel";
import { Progress } from "../../patterns/Progress";
import {
  Row,
  StyledCard,
  AccomplishmentPillButton,
  SchedulePillButton,
  Container,
  ArticleBottom,
  Space,
  SoberStartButton,
  SoberStartWrapper,
} from "./HomeLoggedIn.styles";
import { SummaryData } from "../../patterns/SummaryData/SummaryData";
import { useSchedule } from "../../../contexts/Schedule";
import { Accomplishments } from "../Accomplishments";
import {
  useGetProfile,
  useGetSoberDate,
  usePostAccomplishment,
  useGetArticles,
} from "../../../hooks/useAuthenticatedApi";
import { ShowArticles, ShowFeaturedArticle } from "../../../utils/article";
import { LiveStream } from "../LiveStream";
import { useAmplitude } from "../../../hooks/useAmplitude";
import { useDisplayNotification } from "../../../contexts/Notification";
import { screens } from "../../../screens";
import { Hero } from "../../atoms";

const pageText = {
  sessionsAttended: "Sessions Attended",
  workoutsCompleted: "Workouts Completed",
  healthyMeals: "Healthy Meals",
  logAccomplishment: "Log Accomplishment",
  allStats: "All Stats",
  schedule: "Schedule",
  fullWeeksSchedule: "Full Weeks Schedule",
  featured: "Featured",
  articles: "Articles",
  moreArticles: "More Articles",
};

const today = moment(new Date()).format("dddd");

const getContent = async () => {
  return {
    daysSober: 32,
    daysSoberSubheading: "3 Days to Next Badge",
    quote: {
      quote: "Keep Going, Keep Going, Keep Going",
      author: "- Todd Crandell",
    },
    liveStream: {
      title: "Live Stream",
      streamUrl: "https://www.facebook.com/pg/RacingforRecovery/posts/",
      post: {
        title: "Join our Live Stream",
        subtitle: "Wednesday February 22 - 8:00PM",
      },
    },
    stats: {
      sessionsAttended: 24,
      workoutsCompleted: 14,
      healthyMeals: 16,
    },
  };
};

export const HomeLoggedIn = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [showAccomplishment, setShowAccomplishment] = useState(false);
  const [content, setContent] = useState(undefined);
  const [soberDate, setSoberDate] = useState(undefined);
  const [allArticles, setAllArticles] = useState([]);
  const snapPoints = useMemo(() => ["90%", "90%"], []);
  const bottomSheetRef = useRef();
  const postAccomplishment = usePostAccomplishment();
  const { data: soberStartDate } = useGetSoberDate();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const { showScheduleContent } = useSchedule();
  const { data: getAllArticles } = useGetArticles();
  const { data: profile, mutate: mutateProfile } = useGetProfile();

  const isFocused = useIsFocused();

  const displayNotification = useDisplayNotification();
  useAmplitude(HomeLoggedIn.displayName);

  useEffect(() => {
    (async () => {
      if (getAllArticles) {
        setAllArticles(getAllArticles);
      }
    })();
  }, [getAllArticles]);

  useEffect(() => {
    const loadContent = async () => {
      const localContent = await getContent();
      setContent(localContent);

      setSoberDate(soberStartDate?.soberDayCount);
      setIsLoadingContent(false);
    };

    if (isFocused) {
      loadContent();
    }
  }, [soberDate, isFocused, soberStartDate]);

  useEffect(() => {
    if (showAccomplishment) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.dismiss();
      setIsLoadingContent(false);
    }
  }, [showAccomplishment]);

  if (isLoadingContent) {
    return <ActivityIndicator />;
  }

  const handleSheetChange = (val) => {
    if (val === -1) {
      setShowAccomplishment(false);
    }
  };

  return (
    <>
      <PageContainer>
        <Container>
          <Carousel contentHeight={200} style={{ width: "100%" }}>
            <Hero>
              {soberDate !== undefined && soberDate !== null ? (
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Progress value={soberDate} title="Days Sober" />
                </View>
              ) : (
                <SoberStartWrapper>
                  <SoberStartButton
                    title="Set Sober Start Date"
                    onPress={() => {
                      navigation.navigate("Set Sober Start Date");
                    }}
                  />
                </SoberStartWrapper>
              )}
            </Hero>
            <Hero>
              <HeroText
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                upperText={content?.quote.quote}
                lowerText={content?.quote.author}
              />
            </Hero>
          </Carousel>
          <StyledCard>
            <Row>
              <SummaryData
                title={profile?.soberSupport || 0}
                subtitle={pageText.sessionsAttended}
              />
              <SummaryData
                title={profile?.workoutsCompleted || 0}
                subtitle={pageText.workoutsCompleted}
              />
              <SummaryData
                title={profile?.healthyEating || 0}
                subtitle={pageText.healthyMeals}
              />
            </Row>
            <Row style={{ justifyContent: "flex-start", marginTop: 30 }}>
              <AccomplishmentPillButton
                title="Log Accomplishment"
                onPress={() => {
                  setShowAccomplishment(true);
                }}
              />
              <PillButton
                title="All Stats"
                variant="quaternary"
                onPress={() => {
                  navigation.navigate(screens.stats);
                }}
              />
            </Row>
          </StyledCard>

          <Space />
          <ScheduleList
            scheduleData={showScheduleContent}
            day={lowercase(today)}
            isSchedule
          />
          <SchedulePillButton
            title={pageText.fullWeeksSchedule}
            onPress={() => {
              navigation.navigate("Schedule");
            }}
          />
          <LiveStream
            inline
            sectionTitle={content?.liveStream.title}
            onPress={() => {
              navigation.navigate("LiveStream");
            }}
          />
          <Space />
          <Space />
          <ArticleBottom
            title={pageText.featured}
            titleIconImage={CalendarIcon}
          >
            <ShowFeaturedArticle
              articles={allArticles}
              navigation={navigation}
            />
          </ArticleBottom>
          <Section title={pageText.articles} titleIconImage={CalendarIcon}>
            <ShowArticles articles={allArticles} navigation={navigation} />
          </Section>
        </Container>
      </PageContainer>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        style={{ position: "absolute", zIndex: 10 }}
        detached={true}
      >
        <Accomplishments
          onCancel={() => setShowAccomplishment(false)}
          onConfirm={async (data) => {
            const result = await postAccomplishment({
              title: data.activityType,
              completionTime: data.activityDate,
              length: data.workoutLength,
              notes: data.notes,
            });

            mutateProfile();
            setShowAccomplishment(false);
            displayNotification("Logged Accomplishment!");
          }}
        />
      </BottomSheetModal>
    </>
  );
};

HomeLoggedIn.displayName = "HomeLoggedIn";
