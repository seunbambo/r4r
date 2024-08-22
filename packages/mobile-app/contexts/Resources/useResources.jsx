import { useEffect, useState } from "react";
import { useResourcesCtx } from "./useResourcesContext";

// TODO: Replace on wire-up with call to get data from CMS
const mockResourcesData = {
  book: {
    bookOne: {
      category: "Book",
      title: "From Addict to Ironman",
      format: "Paperback & Audio CD",
      image: require("../../assets/images/resources/books/from_addict_to_ironman_full.jpg"),
      buttons: [
        {
          buttonText: "Get the Paperback",
          link: "https://www.racingforrecovery.org/product/from-addict-to-ironman-paperback-audio-cd/",
        },
        {
          buttonText: "Get the Free Audiobook",
          link: "https://www.racingforrecovery.org/product/from-addict-to-ironman-paperback-audio-cd/",
        },
      ],
      detailsText:
        "Todd Crandell’s drug use and drinking destroyed his life. In his 20s, he had gone from being a promising student to a homeless, starving, and drug-addicted ghost of himself. After several brutal and harrowing encounters with rock-bottom, he decided to quit cold-turkey; then he took up triathlons, and found that athletic effort helped him overcome his addictions. He now competes regularly in full Ironman triathlons, works as a professional speaker and drug counselor, and runs a foundation (Racing for Recovery) helping others to use sports and positive endeavor to escape addiction. A mesmerizing, inspirational story of self-destruction and resurrection.",
    },
    bookTwo: {
      category: "Book",
      title: "There's More Than One Way to Get to Cleveland",
      format: "Paperback & Audio CD",
      image: require("../../assets/images/resources/books/theres_more_than_one_way.jpg"),
      buttons: [
        {
          buttonText: "Get the Paperback",
          link: "https://www.racingforrecovery.org/product/theres-more-than-one-way-to-get-to-cleveland-paperback/",
        },
        {
          buttonText: "Get the Free Audiobook",
          link: "https://www.racingforrecovery.org/product/audio-book-theres-more-than-one-way-to-get-to-cleveland/",
        },
      ],
      detailsText:
        "Twelve-step programs like AA don’t work for many addicts. The Ten Lifestyles of Recovery are the holistic, healthy alternative. Former addict, addiction counselor and ultra-endurance athlete Todd Crandell explains what makes the Lifestyles work. Todd knows what he’s talking about: he wasted 13 years of his life being addicted to drugs and alcohol—ruining relationships, squandering his athletic talents, and nearly committing suicide. But after he pulled himself out of addiction with endurance sports, he realized that traditional twelve-step programs were too limited for many addicts. So he started Racing for Recovery, a counseling and support group that helps its members rediscover healthy, balanced lives free from addiction. At the core of Todd’s work as an addictions counselor and head of Racing For Recovery are the ten Lifestyles of Recovery. Holistic, organic and healing, the Lifestyles free addicts from the strictures of twelve-step and help them rebuild lives centered on physical, emotional and spiritual wellness. Examples: • Lifestyle #3: Rely On Friends, Family, Teachers and Peers • Lifestyle #5: Build Self-Esteem and Confidence • Lifestyle #9: Recognize and Embrace Personal Challenges As thousands of recovering addicts and their families can attest, the Lifestyles of Recovery work. Instead of treating addiction as a disease, they treat it as a CHOICE. The emotional pain and trauma that leads to substance abuse is the real disease, and the LIfestyles’ emphasis on personal and emotional healing helps addicts address past pain and move beyond it, making freedom possible. “There’s More Than One Way to Get to Cleveland” also tells the intense, shocking and ultimately hopeful stories of ten former addicts who have worked with Racing for Recovery to overcome the addictions that blighted and almost ended their lives. These courageous individuals share their stories in all their gruesome detail, illustrating not only the depths to which drug and alcohol abuse can cause us to sink, but the hope that exists for anyone who chooses to embrace sobriety. As Todd says, “With sobriety, anything is possible!”",
    },
    bookThree: {
      category: "Book",
      title: "Choices & Consequences",
      format: "Paperback & Audio CD",
      image: require("../../assets/images/resources/books/choices_and_consequences_full.jpg"),
      buttons: [
        {
          buttonText: "Get the Paperback",
          link: "https://www.racingforrecovery.org/product/choices-and-consequences/",
        },
        {
          buttonText: "Get the Free Audiobook",
          link: "https://www.racingforrecovery.org/product/choices-and-consequences/",
        },
      ],
      detailsText:
        "Through stories, science, and interviews, this book explores the choices we make around addiction and trauma. Charting a course through tragic consequences to a balanced, healthy, holistic lifestyle is never easy, but following the plans outlined by Todd Crandell, founder of Racing for Recovery, makes it simple and joyful.",
    },
  },
  film: {
    filmOne: {
      category: "Film",
      title: "Addict",
      format: "DVD",
      image: require("../../assets/images/resources/books/addict_full.jpg"),
      buttons: [
        {
          buttonText: "Get the DVD",
          link: "https://www.racingforrecovery.org/product/addict-documentary/",
        },
      ],
      detailsText:
        "This documentary was produced in Toledo, Ohio, over a year and a half, starting in Spring 2002. “Addict” examines the life and struggle for sobriety of Todd Crandell from birth to present day. The scope of the film covers his childhood, the failed promise of a hockey career, his descent into the abyss of drug and alcohol addiction, and his climb to independence. It also looks at his participation in the Ironman Triathlon’s grueling 2.4 mile swim, 112 mile bike ride and 26.2 mile marathon run. In this documentary we’re introduced to Racing for Recovery™, Crandell’s non-profit organization whose mission is to help prevent drug and alcohol abuse. This moving film features interviews with family members, Crandell’s high school hockey coach, retired professional hockey player Patrick Jablonski, friends and Crandell himself telling this amazing and riveting story of his fall and rise. The premiere of “Addict” was a tremendous success with close to 450 witnessing this riveting and motivating film. “Addict” will now be shown in various cities across the country to help spread the mission of Racing for Recovery™.",
    },
    filmTwo: {
      category: "Film",
      title: "Running With Demons",
      format: "DVD",
      image: require("../../assets/images/resources/books/running_with_demons_full.jpg"),
      buttons: [
        {
          buttonText: "Get the DVD",
          link: "https://www.racingforrecovery.org/product/running-with-demons/",
        },
      ],
      detailsText:
        "…Destitute and homeless, Todd began a new journey taking him across the globe competing in the extremes of all endurance races: the 2001 Ironman™ in New Zealand. But unbeknownst to Todd, crossing the finish line would become more symbolic than just finishing a race. It would change his life, and the lives of others. Fast forward eighteen years, Todd competes in extreme endurance events all over the world, promoting his not-for-profit foundation, Racing for Recovery™, utilizing the Ironman™ and now the Ultraman™: a grueling three-day, 318.6 mile triathlon, to spread his message of hope…",
    },
    filmThree: {
      category: "Film",
      title: "Pure Euphoria",
      format: "DVD",
      image: require("../../assets/images/resources/books/pure_euphoria_full.jpg"),
      buttons: [
        {
          buttonText: "Get the DVD",
          link: "https://www.pureeuphoriafilm.com/",
        },
      ],
      detailsText:
        "Pure Euphoria is a look into the mind of a determined man's rise from the depths of depression and suicidal thoughts. Todd Crandell is a former drug addict and, now, a 30-time Ironman finisher. He has reached his higher purpose by pushing his body, mind and spirit to the limit. A journey of consciousness with one of the world's most extraordinary humans as he completes a gruelling swim, bike, and run through mystical terrain.",
    },
  },
};

export const useResources = (itemSlug, category) => {
  const { setResourcesData } = useResourcesCtx();
  const { resourcesData } = useResourcesCtx();

  const [showResourcesContent, setShowResourcesContent] = useState(undefined);

  const getResourcesData = async () => {
    setResourcesData(mockResourcesData);
  };

  useEffect(() => {
    const loadContent = async () => {
      if (!resourcesData) {
        await getResourcesData();
      } else {
        setShowResourcesContent(resourcesData[category][itemSlug]);
      }
    };

    loadContent();
  }, [resourcesData]);

  return { showResourcesContent };
};
