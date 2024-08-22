import React, { useEffect, useState } from "react";
import { ActivityIndicator, useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import PageContainer from "../../atoms/PageContainer";
import { TextOverImage } from "../../atoms/TextOverImage";
import { Image, StyledText } from "../../atoms";
import { BottomSpace, FounderText } from "./About.styles";
import {
  ExpandableListContainer,
  ExpandableListItem,
} from "../../patterns/ExpandableList";
import { useAmplitude } from "../../../hooks/useAmplitude";

import { getImageURL } from "../../../utils/article";
import { useGetAbout } from "../../../hooks/useApi";

const tagStyles = {
  body: {
    color: "#FFFFFFF2",
    fontSize: "16.8px",
    fontFamily: "Poppins",
    lineHeight: "25px",
    fontWeight: "400",
    padding: "10px",
  },
  p: {
    fontFamily: "Poppins",
  },
};

export const About = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [content, setContent] = useState(undefined);
  const { width } = useWindowDimensions();
  useAmplitude(About.displayName);
  const { data: aboutData } = useGetAbout();

  useEffect(() => {
    (async () => {
      if (aboutData) {
        setContent(aboutData);
        setIsLoadingContent(false);
      }
    })();
  }, [aboutData]);

  if (isLoadingContent) {
    return <ActivityIndicator />;
  }

  return (
      <PageContainer>
        <TextOverImage
          backgroundImage={{uri: getImageURL(content.titleImage)}}
          upperText={content.title}
        />
        <RenderHtml
          contentWidth={width}
          source={{ html: content.firstParagraph }}
          tagsStyles={tagStyles}
        />
        <TextOverImage
          backgroundImage={{uri: getImageURL(content.quoteImage)}}
          upperText={content.quoteTitle}
          lowerText={content.quoteText}
          height={285}
          upperTextPadding={10}
        />
        <StyledText padding={10} variant="small" caps="uppercase">
          FOUNDER &amp; PRESIDENT, RACING FOR RECOVERY
        </StyledText>
        <FounderText variant="title">{content.founder}</FounderText>
        <FounderText fontSize={14} opacity="light">
          LPCC-S LICDC-CS
        </FounderText>
        <Image
          imageUri={getImageURL(content.founderImage)}
          borderRadius={16}
          height={379}
          withoutBorder={false}
        />
        <RenderHtml
          contentWidth={width}
          source={{ html: content.aboutFounder }}
          tagsStyles={tagStyles}
        />
        <ExpandableListContainer>
          {content.aboutInfo.map((about) => {
            return (
              <ExpandableListItem title={about.title} key={about.id}>
                <RenderHtml
                  contentWidth={width}
                  source={{ html: about.body }}
                  tagsStyles={tagStyles}
                />
              </ExpandableListItem>
            );
          })}
        </ExpandableListContainer>
        <BottomSpace />
      </PageContainer>
  );
};

About.displayName = "About";
