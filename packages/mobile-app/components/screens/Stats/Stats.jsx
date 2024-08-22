import { useNavigation, useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { Dimensions, View } from "react-native";
import { Hero } from "../../atoms/Hero";
import { StyledText } from "../../atoms/StyledText";

import {
  Container,
  StreakValue,
  Card,
  SmallText,
  Row,
  ImageWrapper,
  Text,
  ImageOuterWrapper,
  SoberStartButton,
  SoberStartWrapper,
} from "./Stats.styles";
import {
  useGetUser,
  useGetProfile,
  useGetSoberDate,
} from "../../../hooks/useAuthenticatedApi";
import { ContentArea } from "../../atoms/ContentArea";
import { Section } from "../../patterns/Section";
import { Layout } from "../../patterns/Layout";
import { ProgressCounter } from "../../patterns/ProgressCounter";
import processBadgeAward from "../../../utils/badge";
import { useAmplitude } from "../../../hooks/useAmplitude";

import { badgeImage } from "./badges";

const content = {
  daysSober: 32,
  daysSoberDescription:
    "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
  healthyEating: 24,
  healthyEatingAllTime: 42,
  sessions: 14863,
  sessionsAllTime: 250684,
  workOuts: 2,
  workOutsAllTime: 12,
};

export const Stats = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { data: user, error, mutate } = useGetUser();

  const [userInfo, setUserInfo] = useState({
    user: undefined,
    profile: undefined,
  });
  const [soberDate, setSoberDate] = useState();
  const [qualifiedBadges, setQualifiedBadges] = useState();
  const [featuredBadge, setFeaturedBadge] = useState();
  const theme = useTheme();

  useAmplitude(Stats.displayName);
  const { data: profile } = useGetProfile();
  const { data: soberDay } = useGetSoberDate();

  useEffect(() => {
    async function loadUser() {
      const badgeData = processBadgeAward(soberDay?.soberDayCount);
      setUserInfo({ user, profile });
      setSoberDate(
        soberDay?.soberDayCount || soberDay?.soberDayCount === 0
          ? badgeData?.daysToNextBadge
          : null,
      );
      setQualifiedBadges(badgeData?.qualifiedBadges);
    }

    if (isFocused) {
      loadUser();
    }
  }, [isFocused]);

  const convertDays = (days) => {
    const timeObj = {};
    if (days < 365) {
      const timeValue = Math.floor(days / 30);
      Object.assign(timeObj, { timeValue, unit: "Months" });
    } else {
      const timeValue = Math.floor(days / 365);
      Object.assign(timeObj, {
        timeValue,
        unit: timeValue > 1 ? "Years" : "Year",
      });
    }

    return timeObj;
  };

  const findBadge = (badgeNumber) => {
    return badgeNumber <= 1460 ? badgeImage[badgeNumber] : badgeImage.default;
  };

  useEffect(() => {
    if (qualifiedBadges?.length) {
      const badgeNumber = qualifiedBadges[qualifiedBadges.length - 1];
      const { timeValue, unit } = convertDays(badgeNumber);
      setFeaturedBadge({
        badgeNumber: timeValue,
        badgeUnit: unit,
        badgeImageData: findBadge(badgeNumber),
      });
    } else {
      setFeaturedBadge(null);
    }
  }, [qualifiedBadges]);

  navigation.setOptions({
    headerShown: false,
  });

  return (
    <Container>
      <Hero>
        <ContentArea>
          <StyledText
            variant="title"
            padding={`0 0  ${theme.spacing.medium}px 0`}
          >
            {userInfo?.user?.username}
          </StyledText>
          {/* <Card>
            <StreakValue>{userInfo?.profile?.soberSupport}</StreakValue>
            <SmallText>Days Sober</SmallText>
            <StyledText>{content.daysSoberDescription}</StyledText>
          </Card> */}
        </ContentArea>
      </Hero>
      <ContentArea>
        {soberDate && (
          <Card>
            {featuredBadge?.badgeNumber && (
              <>
                <ImageWrapper
                  source={featuredBadge.badgeImageData?.link}
                  width={90}
                  height={90}
                  style={{ alignItems: "center" }}
                />
                <Text
                  variant="title"
                  color={featuredBadge.badgeImageData?.color}
                  style={{ top: -55 }}
                >
                  {featuredBadge.badgeNumber}
                </Text>
                <Text variant="tiny" fontWeight="bold" style={{ top: -15 }}>
                  {featuredBadge.badgeNumber} {featuredBadge.badgeUnit}
                </Text>
              </>
            )}
            {!isNaN(soberDate) && soberDate && (
              <View style={{ right: 60 }}>
                <ProgressCounter dueDate={soberDate} />
              </View>
            )}
          </Card>
        )}
        {!isNaN(soberDate) && !soberDate && (
          <SoberStartWrapper>
            <SoberStartButton
              title="Set Sober Start Date"
              onPress={() => {
                navigation.navigate("Set Sober Start Date");
              }}
            />
          </SoberStartWrapper>
        )}
        {qualifiedBadges?.length ? (
          <Card align="flex-start">
            <StyledText alignment="left">BADGES AWARDED</StyledText>
            <ImageOuterWrapper style={{ flexWrap: "wrap" }}>
              {qualifiedBadges?.map((badge, index) => {
                const { timeValue, unit } = convertDays(badge);
                return (
                  <View
                    style={{
                      marginLeft: 15,
                    }}
                    key={index}
                  >
                    <ImageWrapper
                      source={findBadge(badge)?.link}
                      style={{ alignItems: "center" }}
                    />
                    <Text
                      fontSize={17}
                      fontWeight="bold"
                      color={findBadge(badge)?.color}
                      style={{
                        bottom: 40,
                        zIndex: 9999,
                        alignSelf: "center",
                      }}
                    >
                      {timeValue}
                    </Text>
                    <Text
                      fontSize={9}
                      fontWeight="bold"
                      style={{ bottom: 10, zIndex: 9999, alignSelf: "center" }}
                    >
                      {timeValue} {unit}
                    </Text>
                  </View>
                );
              })}
            </ImageOuterWrapper>
          </Card>
        ) : null}
        <Section title="Streaks">
          <Layout width={Dimensions.get("window").width / 2 - 20}>
            <Card>
              <SmallText>Healthy Eating</SmallText>
              <StreakValue>
                {userInfo?.profile?.healthyEatingStreaksCurrent || 0}
              </StreakValue>
              <SmallText>Day Streak</SmallText>
              <Row>
                <SmallText
                  style={{
                    fontWeight: "700",
                    opacity: 1,
                    marginRight: theme.spacing.xsmall,
                  }}
                >
                  {userInfo?.profile?.healthyEatingStreaksAllTime || 0}
                </SmallText>
                <SmallText>All Time</SmallText>
              </Row>
            </Card>
            <Card>
              <SmallText>Sessions</SmallText>
              <StreakValue>
                {userInfo?.profile?.soberSupportStreaksCurrent || 0}
              </StreakValue>
              <SmallText>Day Streak</SmallText>
              <Row>
                <SmallText
                  style={{
                    fontWeight: "700",
                    opacity: 1,
                    marginRight: theme.spacing.xsmall,
                  }}
                >
                  {userInfo?.profile?.soberSupportStreaksAllTime || 0}
                </SmallText>
                <SmallText>All Time</SmallText>
              </Row>
            </Card>
            <Card>
              <SmallText>Work Out</SmallText>
              <StreakValue>
                {userInfo?.profile?.workoutsCompletedStreaksCurrent || 0}
              </StreakValue>
              <SmallText>Day Streak</SmallText>
              <Row>
                <SmallText
                  style={{
                    fontWeight: "700",
                    opacity: 1,
                    marginRight: theme.spacing.xsmall,
                  }}
                >
                  {userInfo?.profile?.workoutsCompletedStreaksAllTime || 0}
                </SmallText>
                <SmallText>All Time</SmallText>
              </Row>
            </Card>
          </Layout>
        </Section>
      </ContentArea>
    </Container>
  );
};

Stats.displayName = "Stats";
