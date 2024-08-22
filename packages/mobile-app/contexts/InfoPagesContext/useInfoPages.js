/* eslint-disable global-require */
import { useEffect, useState } from "react";
import { useInfoPagesCtx } from "./useInfoPagesContext";

// TODO: Replace on wire-up with call to get data from CMS
const mockInfoPagesData = {
  counseling: {
    title: "Counseling Services",
    itemSlug: "counseling",
    articleText:
      "Racing for Recovery provides clinical, licensed, educational and experienced information to help those who are suffering from addiction and self harming behaviors the impact of trauma, genetic predisposition and how to implement a balanced holistic lifestyle that is conducive to sustaining sobriety while simultaneously finding life's purpose.",
    image: require("../../assets/images/councellingServices.jpg"),
    smallImage: {
      imageSource: require("../../components/screens/Services/Racing-For-Recovery-Counseling.png"),
    },
    imageProps: {
      imageSource: require("../../components/screens/Services/counselling_services_big.jpg"),
    },
  },
  supportGroups: {
    title: "Support Groups",
    itemSlug: "supportGroups",
    articleText:
      "Mentors guide new participants by building trust and modeling positive behaviors such as limiting risk factors, encouraging community involvement, and provide protective factors.",
    image: null,
    smallImage: {
      imageSource: require("../../components/screens/Services/Racing-For-Recovery-Support-Groups.png"),
    },
    imageProps: {
      imageSource: require("../../components/screens/Services/support_groups_big.jpg"),
    },
  },
  exerciseGroups: {
    title: "Exercise Groups",
    itemSlug: "exerciseGroups",
    articleText:
      "We promote creative balance through a holistic lifestyle and positive alternatives. Join us for group workouts, yoga, pilates, swimming and more.",
    image: null,
    smallImage: {
      imageSource: require("../../components/screens/Services/Racing-For-Recovery-Soul-Core.png"),
    },
    imageProps: {
      imageSource: require("../../components/screens/Services/excersise_groups_big.jpg"),
    },
  },
  educationalWellness: {
    title: "Educational Wellness",
    itemSlug: "educationalWellness",
    articleText:
      "We offer Educational Wellness (IOP) through the Intensive Outpatient Therapy & Outpatient Therapy programs. Meeting topics of discussion include substance abuse issues, recovery, exercise and leading a healthy and productive lifestyle.",
    image: null,
    smallImage: {
      imageSource: require("../../components/screens/Services/Racing-For-Recovery-IOP.png"),
    },
    imageProps: {
      imageSource: require("../../components/screens/Services/educational_wellness_big.jpg"),
    },
  },
};

export const useInfoPages = (itemSlug) => {
  const { setInfoPagesData } = useInfoPagesCtx();
  const { infoPagesData } = useInfoPagesCtx();
  const [infoShowContent, setInfoShowContent] = useState(undefined);
  const [infoIndexContent, setInfoIndexContent] = useState(undefined);

  const getInfoPagesData = async () => {
    setInfoPagesData(mockInfoPagesData);
  };

  const formatInfoIndex = () => {
    const infoArray = Object.values(infoPagesData);
    const updatedInfoArray = infoArray.map((info) => {
      return {
        title: info.title,
        imageProps: info.imageProps,
        itemSlug: info.itemSlug,
      };
    });
    return {
      services: {
        title: "Services",
        items: [...(updatedInfoArray || [])],
      },
    };
  };

  useEffect(() => {
    const loadContent = async () => {
      if (!infoPagesData) {
        await getInfoPagesData();
      } else if (itemSlug) {
        setInfoShowContent(infoPagesData[itemSlug]);
      } else {
        // Format Info Pages data for use on Services Screen
        setInfoIndexContent(formatInfoIndex());
      }
    };

    loadContent();
  }, [infoPagesData]);

  return { infoShowContent, infoIndexContent };
};
