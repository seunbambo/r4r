import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, ScrollView } from "react-native";
import { useTheme, TextInput as BaseTextInput } from "react-native-paper";
import {
  ImageContainer,
  AccomplishmentsHeading,
  PageContainer,
  TextInput,
  Content,
  LowerButtons,
  ButtonWrapper,
} from "./Accomplishments.styles";
import { RadioButton } from "../../atoms/RadioButton";
import { Section } from "../../patterns";
import DatePicker from "../../atoms/DatePicker";
import { PillButton } from "../../atoms/PillButton";
import { StyledText } from "../../atoms/StyledText";

const AccomplishmentTypes = {
  AttendSession: "sober support",
  CompleteWorkout: "complete a workout",
  AteHealthyMeal: "ate a healthy meal",
};

const data = [
  {
    id: 1,
    text: "Attend a Session",
    value: AccomplishmentTypes.AttendSession,
  },
  {
    id: 1,
    text: "Complete a Workout",
    value: AccomplishmentTypes.CompleteWorkout,
  },
  {
    id: 1,
    text: "Ate a Healthy Meal",
    value: AccomplishmentTypes.AteHealthyMeal,
  },
];

const RadioWrapper = ({ onChange }) => {
  const [checked, setChecked] = useState(AccomplishmentTypes.AttendSession);
  const theme = useTheme();

  const handlePress = (value) => {
    setChecked(value);
    onChange(value);
  };

  return (
    <Content>
      <Section title="Select Accomplishment" light>
        <RadioButton
          data={data}
          onValueChange={handlePress}
          value={checked}
          itemWrapperProps={{ style: { justifyContent: "flex-start" } }}
        />
      </Section>
    </Content>
  );
};

const pageContent = {
  headingText: "Keep up the great work!",
};

export const Accomplishments = ({ onConfirm, onCancel }) => {
  const baseTheme = useTheme();

  const theme = {
    colors: {
      text: baseTheme.colors.borderDark,
      placeholder: baseTheme.colors.borderLight,
    },
  };

  const [content, setContent] = useState(pageContent);
  const [activityDate, setActivityDate] = useState(new Date());
  const [activityType, setActivityType] = useState(
    AccomplishmentTypes.AttendSession,
  );
  const [notes, setNotes] = useState();
  const [workoutLength, setWorkoutLength] = useState();

  return (
    <PageContainer>
      <ScrollView>
        <ImageContainer>
          <AccomplishmentsHeading>{content.headingText}</AccomplishmentsHeading>
        </ImageContainer>
        <RadioWrapper onChange={setActivityType} />
        <Content style={{ marginBottom: baseTheme.spacing.xxlarge * 2 }}>
          <DatePicker
            placeholder="Completion Time"
            value={activityDate}
            theme={theme}
            onChange={(value) => {
              setActivityDate(value);
            }}
            inputProps={{
              themeOverrides: theme,
              right: (
                <BaseTextInput.Icon
                  icon="eye"
                  color={baseTheme.colors.borderLight}
                  style={{ paddingTop: baseTheme.spacing.large }}
                />
              ),
              style: {
                backgroundColor: baseTheme.colors.lighterGray,
                color: baseTheme.colors.primary,
              },
            }}
          />
          {(activityType === AccomplishmentTypes.AttendSession ||
            activityType === AccomplishmentTypes.AteHealthyMeal) && (
            <TextInput
              placeholder="Notes"
              themeOverrides={theme}
              value={notes}
              onChange={(event) => {
                setNotes(event.nativeEvent.text);
              }}
            />
          )}

          {activityType === AccomplishmentTypes.CompleteWorkout && (
            <TextInput
              placeholder="Workout Length (in minutes)"
              value={workoutLength}
              themeOverrides={theme}
              onChange={(event) => {
                setWorkoutLength(event.nativeEvent.text);
              }}
              keyboardType="number-pad"
              right={
                <BaseTextInput.Icon
                  icon="clock-outline"
                  color={baseTheme.colors.borderLight}
                  style={{ paddingTop: baseTheme.spacing.medium }}
                />
              }
            />
          )}
        </Content>
      </ScrollView>
      <LowerButtons>
        <ButtonWrapper>
          <PillButton
            onPress={() => {
              onCancel && onCancel();
            }}
            variant="secondary"
            style={{ margin: baseTheme.spacing.small }}
            textColor={baseTheme.colors.borderLight}
            title="Cancel"
          />
        </ButtonWrapper>

        <ButtonWrapper>
          <PillButton
            style={{ margin: baseTheme.spacing.small }}
            onPress={() => {
              onConfirm &&
                onConfirm({ activityType, activityDate, notes, workoutLength });
            }}
            title="Confirm"
          />
        </ButtonWrapper>
      </LowerButtons>
    </PageContainer>
  );
};
