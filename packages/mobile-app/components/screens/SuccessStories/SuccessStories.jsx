import { useNavigation, useRoute } from "@react-navigation/native";
import { SuccessStories as SuccessStoriesComponent } from "../../patterns/SuccessStories";
import { ContentArea } from "../../atoms/ContentArea";
import PageContainer from "../../atoms/PageContainer";
import { useAmplitude } from "../../../hooks/useAmplitude";

export const SuccessStories = () => {
  // Get the parameters from navigation
  const navigation = useNavigation();
  const route = useRoute();
  useAmplitude(SuccessStories.displayName);
  const { params } = route;
  const { stories } = params;

  return (
    <PageContainer>
      <ContentArea>
        <SuccessStoriesComponent
          stories={stories}
          smallView={false}
          onPress={(story) => {
            navigation.navigate("SuccessStory", {
              title: story?.title,
              story,
            });
          }}
        />
      </ContentArea>
    </PageContainer>
  );
};

SuccessStories.displayName = "SuccessStories";
