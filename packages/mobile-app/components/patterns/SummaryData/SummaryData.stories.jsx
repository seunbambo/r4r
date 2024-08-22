/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import { SummaryData } from "./SummaryData";
import { Card } from "../../atoms/Card";
import { Row } from "./SummaryData.styles";
import { PillButton } from "../../atoms";

storiesOf("SummaryData", module)
  .add("default (primary)", () => (
    <View style={{ width: 140 }}>
      <SummaryData title="24" subtitle="Sessions Attended" />
    </View>
  ))
  .add("in card with other items", () => (
    <Card
      style={{ margin: 10, padding: 10, paddingTop: 20, paddingBottom: 30 }}
    >
      <Row>
        <SummaryData title="24" subtitle="Sessions Attended" />
        <SummaryData title="14" subtitle="Workouts Completed" />
        <SummaryData title="16" subtitle="Healthy Meals" />
      </Row>
      <Row style={{ justifyContent: "flex-start", marginTop: 20 }}>
        <PillButton style={{ marginRight: 20, flexGrow: 3 }}>
          Log Accomplishment
        </PillButton>
        <PillButton variant="quaternary">All Stats</PillButton>
      </Row>
    </Card>
  ));
