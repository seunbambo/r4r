import { useEffect, useState } from "react";
import moment from "moment";
import { Image } from "react-native";
import { StyledText } from "../../components/atoms";
import { Subtitle } from "../../components/screens/HomeLoggedIn/HomeLoggedIn.styles";
import { useScheduleCtx } from "./useScheduleContext";

import CalendarIcon from "../../assets/images/calendar_icon.png";
import HealthWellnessImg from "../../assets/images/homeLoggedIn/health_wellness.png";
import HealthStartImg from "../../assets/images/homeLoggedIn/healthy_start.png";
import HealthBoundaryImg from "../../assets/images/homeLoggedIn/healthy_boundaries.png";
import IntensiveOutImg from "../../assets/images/homeLoggedIn/intensive_outpatient.png";
import LifeStyleImg from "../../assets/images/homeLoggedIn/lifestyle_skills_in_recovery.png";
import StayingAliveImg from "../../assets/images/homeLoggedIn/staying_alive.png";
import ParentingFamImg from "../../assets/images/homeLoggedIn/parenting_and_family_dynamics.png";
import BedAllianceImg from "../../assets/images/homeLoggedIn/bedford_alliance_church.png";
import NutritionImg from "../../assets/images/homeLoggedIn/nutrition.png";
import SoberFamImg from "../../assets/images/homeLoggedIn/sober_fun_family_night.png";
import PeerGroupImg from "../../assets/images/homeLoggedIn/peer-group.png";
import SpiritualityImg from "../../assets/images/homeLoggedIn/spirituality.png";

const today = moment(new Date()).format("dddd");

// TODO: Replace on wire-up with call to get data from CMS
const mockScheduleData = [
  {
    title: "Schedule",
    subtitle: (
      <Subtitle style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={CalendarIcon} style={{ marginRight: 4 }} />
        <StyledText variant="small">{today}</StyledText>
      </Subtitle>
    ),
    data: {
      monday: [
        {
          id: "healthy_start",
          title: "Healthy Start",
          itemSlug: "healthyStart",
          subtitle: "7am - 8:30am",
          image: (
            <Image source={HealthStartImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "morning_iop_group",
          title: "Morning IOP Group",
          itemSlug: "intensiveOutpatientGroups",
          subtitle: "9am - 11am",
          image: (
            <Image source={IntensiveOutImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "life_skills_of_recovery",
          title: "Lifeskills in Recovery",
          itemSlug: "lifeSkillsInRecovery",
          subtitle: "11am - 1pm",
          image: (
            <Image source={LifeStyleImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "healthy_boundaries",
          title: "Healthy Boundaries",
          itemSlug: "healthyBoundaries",
          subtitle: "1pm - 2pm",
          image: (
            <Image
              source={HealthBoundaryImg}
              style={{ width: 51, height: 51 }}
            />
          ),
        },
        {
          id: "spirituality",
          title: "Spirituality Group",
          itemSlug: "spirituality",
          subtitle: "4pm - 5pm",
          image: (
            <Image source={SpiritualityImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "evening_iop_group",
          title: "Evening IOP Group",
          itemSlug: "intensiveOutpatientGroups",
          subtitle: "5pm - 7pm",
          image: (
            <Image source={IntensiveOutImg} style={{ width: 51, height: 51 }} />
          ),
        },
      ],
      tuesday: [
        {
          id: "healthy_start",
          title: "Healthy Start",
          itemSlug: "healthyStart",
          subtitle: "7am - 8:30am",
          image: (
            <Image source={HealthStartImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "morning_iop_group",
          title: "Morning IOP Group",
          itemSlug: "intensiveOutpatientGroups",
          subtitle: "9am - 11am",
          image: (
            <Image source={IntensiveOutImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "staying_alive",
          title: "Staying Alive",
          itemSlug: "stayingAlive",
          subtitle: "11am - 1pm",
          image: (
            <Image source={StayingAliveImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "cleveland_book_study",
          title: "book",
          resourcesTitle: "Cleveland Book Study",
          itemSlug: "bookTwo",
          linkedScreen: "Resources",
          subtitle: "1pm - 2pm",
          image: (
            <Image source={PeerGroupImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "men_women",
          title: "Men's & Women's Support Group",
          itemSlug: "peerLedSupportGroups",
          subtitle: "2pm - 3pm",
          image: (
            <Image source={PeerGroupImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "evening_iop_group",
          title: "Evening IOP Group",
          itemSlug: "intensiveOutpatientGroups",
          subtitle: "5pm - 7pm",
          image: (
            <Image source={IntensiveOutImg} style={{ width: 51, height: 51 }} />
          ),
        },
      ],
      wednesday: [
        {
          id: "healthy_start",
          title: "Healthy Start",
          itemSlug: "healthyStart",
          subtitle: "7am - 8:30am",
          image: (
            <Image source={HealthStartImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "morning_iop_group",
          title: "Morning IOP Group",
          itemSlug: "intensiveOutpatientGroups",
          subtitle: "9am - 11am",
          image: (
            <Image source={IntensiveOutImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "family_dynamics",
          title: "Family Dynamics",
          itemSlug: "parentingAndFamilyDynamics",
          subtitle: "1pm - 2pm",
          image: (
            <Image source={ParentingFamImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "bedfordAllianceChurchGroup",
          title: "Bedford Alliance Church Group",
          itemSlug: "bedfordAllianceChurchGroup",
          subtitle: "5:00pm - 8:30pm",
          image: (
            <Image source={BedAllianceImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "evening_iop_group",
          title: "Evening IOP Group",
          itemSlug: "intensiveOutpatientGroups",
          subtitle: "5pm - 7pm",
          image: (
            <Image source={IntensiveOutImg} style={{ width: 51, height: 51 }} />
          ),
        },
      ],
      thursday: [
        {
          id: "healthy_start",
          title: "Healthy Start",
          itemSlug: "healthyStart",
          subtitle: "7am - 8:30am",
          image: (
            <Image source={HealthStartImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "morning_iop_group",
          title: "Morning IOP Group",
          itemSlug: "intensiveOutpatientGroups",
          subtitle: "9am - 11am",
          image: (
            <Image source={IntensiveOutImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "nutrition",
          title: "Nutrition",
          itemSlug: "nutrition",
          subtitle: "11am - 12pm",
          image: (
            <Image source={NutritionImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "life_skills_of_recovery",
          title: "Lifeskills of Recovery",
          itemSlug: "lifeSkillsInRecovery",
          subtitle: "1pm - 3pm",
          image: (
            <Image source={LifeStyleImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "evening_iop_group",
          title: "Evening IOP Group",
          itemSlug: "intensiveOutpatientGroups",
          subtitle: "4:30pm - 6:30pm",
          image: (
            <Image source={IntensiveOutImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "livestream",
          title: "Thursday Live Support Group",
          linkedScreen: "LiveStream",
          subtitle: "6:30pm",
          image: (
            <Image source={PeerGroupImg} style={{ width: 51, height: 51 }} />
          ),
        },
      ],
      friday: [
        {
          id: "healthy_start",
          title: "Healthy Start",
          itemSlug: "healthyStart",
          subtitle: "7am - 8:30am",
          image: (
            <Image source={HealthStartImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "friday_iop_group",
          title: "Friday IOP Group",
          itemSlug: "intensiveOutpatientGroups",
          subtitle: "10am - 12pm",
          image: (
            <Image source={IntensiveOutImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "friday_health_wellness",
          title: "Health & Wellness",
          itemSlug: "healthAndWellness",
          subtitle: "12pm - 1pm",
          image: (
            <Image
              source={HealthWellnessImg}
              style={{ width: 51, height: 51 }}
            />
          ),
        },
      ],
      saturday: [
        {
          id: "healthy_start",
          title: "Healthy Start",
          itemSlug: "healthyStart",
          subtitle: "7am - 8:30am",
          image: (
            <Image source={HealthStartImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "morning_iop_group",
          title: "Morning IOP Group",
          itemSlug: "intensiveOutpatientGroups",
          subtitle: "9am - 11am",
          image: (
            <Image source={IntensiveOutImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "saturday_public_book_support",
          title: "Public Support Group - Book Study",
          itemSlug: "peerLedSupportGroups",
          subtitle: "5pm - 6pm",
          image: (
            <Image source={PeerGroupImg} style={{ width: 51, height: 51 }} />
          ),
        },
        {
          id: "soberFunFamilyNight",
          title: "Sober Fun Family Night",
          itemSlug: "soberFunFamilyNight",
          subtitle: "6pm - 7pm",
          image: (
            <Image source={SoberFamImg} style={{ width: 51, height: 51 }} />
          ),
        },
      ],
    },
  },
];

export const useSchedule = () => {
  const { setScheduleData } = useScheduleCtx();
  const { scheduleData } = useScheduleCtx();

  const [showScheduleContent, setShowScheduleContent] = useState(undefined);

  const getScheduleData = async () => {
    setScheduleData(mockScheduleData);
  };

  useEffect(() => {
    const loadContent = async () => {
      if (!scheduleData) {
        await getScheduleData();
      } else {
        setShowScheduleContent(scheduleData);
      }
    };

    loadContent();
  }, [scheduleData]);

  return { showScheduleContent };
};
