import React, { useEffect, useMemo, useRef, useState } from "react";
import { Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Hero, PillButton, StyledText } from "../../atoms";
import { ContentArea } from "../../atoms/ContentArea";
import PageContainer from "../../atoms/PageContainer";
import {
  filterArticles,
  ShowArticles,
  ShowFeaturedArticle,
  ShowSuccessStories,
} from "../../../utils/article";
import {
  useGetArticles,
  useGetSuccessStories,
  useExploreHeading,
} from "../../../hooks/useAuthenticatedApi";
import { useAmplitude } from "../../../hooks/useAmplitude";
import {
  ButtonRow,
  ButtonWrapper,
  CenteredContent,
  Compass,
  FilterButton,
  LowerButtons,
  Subtitle,
  SubtitleText,
  TagPill,
  TagView,
  TitleText,
} from "./Explore.styles";
import { Section } from "../../patterns";

// eslint-disable-next-line no-return-assign
const unique = (a, t = {}) => a.filter((e) => !(t[e] = e in t));

export const Explore = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { data: getAllArticles } = useGetArticles();
  const { data: allSuccessStories } = useGetSuccessStories();
  const { data: exploreHeading } = useExploreHeading();

  const [allArticles, setAllArticles] = useState([]);
  const [allsuccessStories, setAllSuccessStories] = useState([]);
  const [exploreHead, setExploreHead] = useState(null);
  const [curatedSubjects, setCuratedSubjects] = useState([]);

  const bottomSheetRef = useRef();
  const snapPoints = useMemo(() => ["70%", "70%"], []);
  const [showFilters, setShowFilters] = useState();
  const [contentLoading, setContentLoading] = useState(true);
  const [subjectFilter, setSubjectFilter] = useState([]);
  useAmplitude(Explore.displayName);

  navigation.setOptions({
    headerShown: false,
  });

  useEffect(() => {
    (async () => {
      if (getAllArticles) {
        setAllArticles(getAllArticles);
      }

      if (allSuccessStories) {
        setAllSuccessStories(allSuccessStories);
      }

      if (exploreHeading) {
        setExploreHead(exploreHeading);
      }

      setContentLoading(false);
    })();
  }, [exploreHeading, getAllArticles, allSuccessStories]);

  useEffect(() => {
    const subjects = allArticles.reduce((acc, article) => {
      acc.push(...article.subjects);
      return acc;
    }, []);
    const uniqueSubjects = unique(subjects);
    setCuratedSubjects(uniqueSubjects);
  }, [allArticles]);

  useEffect(() => {
    if (showFilters) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.dismiss();
    }
  }, [showFilters]);

  const handleSheetChange = (val) => {
    if (val === -1) {
      setShowFilters(false);
    }
  };

  const clearSubjectFilter = () => {
    setSubjectFilter([]);
  };

  const adjustSubjectFilter = (subject) => {
    if (!subjectFilter.includes(subject)) {
      setSubjectFilter((p) => [...p, subject]);
    } else {
      setSubjectFilter((p) => p.filter((item) => item !== subject));
    }
  };

  return (
    <PageContainer>
      <Hero>
        <CenteredContent>
          <Compass />
          <TitleText>{exploreHead?.header}</TitleText>
          <SubtitleText>{exploreHead?.subheader}</SubtitleText>
          {/* <Card>
            <StreakValue>{userInfo?.profile?.soberSupport}</StreakValue>
            <SmallText>Days Sober</SmallText>
            <StyledText>{content.daysSoberDescription}</StyledText>
          </Card> */}
        </CenteredContent>
      </Hero>
      {contentLoading && (
        <ActivityIndicator
          color={theme.colors.white}
          style={{ marginTop: theme.spacing.xlarge }}
        />
      )}
      {!contentLoading && (
        <ContentArea>
          <FilterButton
            onPress={() => {
              setShowFilters((p) => !p);
            }}
          >
            <StyledText fontWeight="bold">Filter by Category </StyledText>
            <Ionicons name="funnel" color={theme.colors.white} />
          </FilterButton>
          <Section
            title="Featured Article"
            type="featured"
            style={{
              marginTop: theme.spacing.large,
              marginBottom: theme.spacing.large,
            }}
          >
            <ShowFeaturedArticle
              articles={allArticles}
              navigation={navigation}
            />
          </Section>

          <ShowSuccessStories
            stories={allsuccessStories}
            navigation={navigation}
          />

          <Section title="Articles" style={{ marginTop: theme.spacing.large }}>
            <ShowArticles articles={allArticles} navigation={navigation} />
          </Section>
        </ContentArea>
      )}
      <BottomSheetModal
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        style={{ position: "absolute", zIndex: 10 }}
        detached
      >
        <ContentArea>
          <Section title="Subject" light>
            {/*  Added this flexWrap as an inline style to fix an Android crash
                 A crash was encountered on Android when this style was in the 
                 styled component. */}
            <TagView style={{ flexWrap: "wrap" }}>
              {curatedSubjects.map((subject, index) => (
                <TagPill
                  key={index}
                  active={subjectFilter.includes(subject)}
                  onPress={() => {
                    adjustSubjectFilter(subject);
                  }}
                >
                  <StyledText
                    color={
                      subjectFilter.includes(subject?.id)
                        ? theme.colors.green
                        : theme.colors.borderSubdark
                    }
                    variant="subtitle"
                  >
                    {subject}
                  </StyledText>
                </TagPill>
              ))}
            </TagView>
          </Section>
        </ContentArea>
        <LowerButtons>
          <ButtonWrapper>
            <PillButton
              onPress={() => {
                setShowFilters(false);
              }}
              variant="secondary"
              style={{ margin: theme.spacing.small }}
              textColor={theme.colors.borderLight}
              title="Cancel"
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <PillButton
              onPress={() => {
                navigation.navigate("ArticleIndex", {
                  articles: filterArticles(allArticles, subjectFilter),
                  stories: filterArticles(allsuccessStories, subjectFilter),
                  title: "Filter",
                });
                setShowFilters(false);
              }}
              style={{ margin: theme.spacing.small }}
              title="Confirm"
            />
          </ButtonWrapper>
        </LowerButtons>
      </BottomSheetModal>
    </PageContainer>
  );
};

Explore.displayName = "Explore";
