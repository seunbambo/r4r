import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Linking } from "react-native";

// Styles
import { useTheme } from "react-native-paper";
import {
  Text,
  PaddedSection,
  Title,
  Subtitle,
  LivestreamContainer,
} from "./LiveStream.styles";

// Components
import { Countdown } from "../../atoms/Countdown";
import { PillButton } from "../../atoms/PillButton";
import PageContainer from "../../atoms/PageContainer";
import { Content } from "../../atoms/Countdown/Countdown.styles";

// api
import { getLivestreamTime } from "../../../services";

const content = {
  title: "Join our Live Stream",
  actionText: "Join Live Stream",
  content:
    "Interact and Comment Live on Facebook | #SOBRIETY. If you missed a meeting, watch the archived versions on YouTube.",
};
export const LiveStream = ({ inline = false, sectionTitle, onPress }) => {
  const isFocused = useIsFocused();
  const theme = useTheme();
  const [liveStreamTime, setLiveStreamTime] = useState(undefined);

  const Wrapper = inline ? React.Fragment : PageContainer;

  useEffect(() => {
    async function loadTime() {
      const timeData = await getLivestreamTime();
      setLiveStreamTime(timeData);
    }
    loadTime();
  }, [isFocused]);

  const SectionWrapper = inline ? PaddedSection : React.Fragment;

  return (
    <Wrapper>
      <LivestreamContainer>
        <SectionWrapper title={sectionTitle}>
          {liveStreamTime && (
            <Countdown
              untilStart={liveStreamTime.secondsToLivestreamStart}
              onPress={onPress}
              isLive={liveStreamTime.isLive}
              inline={inline}
            >
              {inline && (
                <PillButton
                  style={{ marginTop: theme.spacing.large }}
                  onPress={() => {
                    Linking.openURL(
                      "https://www.facebook.com/pg/RacingforRecovery/posts/",
                    );
                  }}
                >
                  {content.actionText}
                </PillButton>
              )}
            </Countdown>
          )}
        </SectionWrapper>
        <Content inline={inline}>
          <Title>
            {liveStreamTime
              ? content.title
              : "Livestream date currently unavailable. Please check back soon."}
          </Title>
          {liveStreamTime?.dateToShow && (
            <Subtitle>{liveStreamTime?.dateToShow}</Subtitle>
          )}
          {!inline && (
            <>
              <PillButton
                style={{
                  marginTop: theme.spacing.large,
                  marginBottom: theme.spacing.small,
                  color: theme.colors.white,
                }}
                onPress={() => {
                  Linking.openURL(
                    "https://www.facebook.com/pg/RacingforRecovery/posts/",
                  );
                }}
              >
                <Text style={{ color: theme.colors.white }}>
                  {content.actionText}
                </Text>
              </PillButton>

              <PaddedSection
                title="About"
                style={{ marginTop: theme.spacing.xlarge }}
              >
                <Text>{content.content}</Text>
              </PaddedSection>
            </>
          )}
        </Content>
      </LivestreamContainer>
    </Wrapper>
  );
};
