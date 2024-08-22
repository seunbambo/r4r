/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { ExpandableListContainer, ExpandableListItem } from "./ExpandableList";
import { StyledText } from "../../atoms";

storiesOf("ExpandableList", module).add("default (primary)", () => (
  <ScrollView>
    <ExpandableListContainer>
      <ExpandableListItem title="History of Racing for Recovery">
        <StyledText variant="body">
          Crandell’s experiences and inspirational efforts led to the formation
          of Racing for Recovery in 2001, a federally approved 501(c)(3)
          non-profit organization dedicated to helping everyone affected by
          addiction. A multi-faceted empowerment group, Racing for Recovery
          offers support group meetings, intensive outpatient groups (IOP),
          individual and family counseling, interventions, assessments,
          specialized treatment plans, speaking engagements, and urinalysis
          testing to help develop and promote a balanced holistic lifestyle.
        </StyledText>
      </ExpandableListItem>
      <ExpandableListItem title="History of Racing for Recovery">
        <StyledText variant="body">
          Crandell’s experiences and inspirational efforts led to the formation
          of Racing for Recovery in 2001, a federally approved 501(c)(3)
          non-profit organization dedicated to helping everyone affected by
          addiction. A multi-faceted empowerment group, Racing for Recovery
          offers support group meetings, intensive outpatient groups (IOP),
          individual and family counseling, interventions, assessments,
          specialized treatment plans, speaking engagements, and urinalysis
          testing to help develop and promote a balanced holistic lifestyle.
        </StyledText>
      </ExpandableListItem>
      <ExpandableListItem title="History of Racing for Recovery">
        <StyledText variant="body">
          Crandell’s experiences and inspirational efforts led to the formation
          of Racing for Recovery in 2001, a federally approved 501(c)(3)
          non-profit organization dedicated to helping everyone affected by
          addiction. A multi-faceted empowerment group, Racing for Recovery
          offers support group meetings, intensive outpatient groups (IOP),
          individual and family counseling, interventions, assessments,
          specialized treatment plans, speaking engagements, and urinalysis
          testing to help develop and promote a balanced holistic lifestyle.
        </StyledText>
      </ExpandableListItem>
    </ExpandableListContainer>
  </ScrollView>
));
