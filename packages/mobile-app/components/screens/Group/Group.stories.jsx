/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Group } from "./Group";

const GroupWrapper = (itemSlug) => {
  // When the Group Screen is used in the app's stack navigator,
  // params (with the itemSlug) can be passed to its route by the Services Screen
  return (
    <Group route={{ params: itemSlug }} />
  );
};

storiesOf("Group", module)
  .add("Healthy Start", () => <GroupWrapper itemSlug="healthyStart" />)
  .add("Intensive Outpatient Groups", () => (
    <GroupWrapper itemSlug="intensiveOutpatientGroups" />
  ))
  .add("Staying Alive", () => <GroupWrapper itemSlug="stayingAlive" />)
  .add("Healthy Boundaries", () => (
    <GroupWrapper itemSlug="healthyBoundaries" />
  ))
  .add("Health & Wellness", () => <GroupWrapper itemSlug="healthAndWellness" />)
  .add("Peer-Led Support Groups", () => (
    <GroupWrapper itemSlug="peerLedSupportGroups" />
  ))
  .add("Parenting & Family Dynamics", () => (
    <GroupWrapper itemSlug="parentingAndFamilyDynamics" />
  ))
  .add("Bedford Alliance Church Group", () => (
    <GroupWrapper itemSlug="bedfordAllianceChurchGroup" />
  ))
  .add("Nutrition", () => <GroupWrapper itemSlug="nutrition" />)
  .add("Sober Fun Family Night", () => (
    <GroupWrapper itemSlug="soberFunFamilyNight" />
  ))
  .add("Lifeskills in Recovery", () => (
    <GroupWrapper itemSlug="lifeSkillsInRecovery" />
  ));
