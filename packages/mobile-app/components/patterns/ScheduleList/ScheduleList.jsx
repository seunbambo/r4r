import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { capitalize } from "../../../utils/string";
import { StyledText } from "../../atoms/StyledText";
import { IconListItem } from "../IconList";

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const groupedData = [ { title: Tuesday, 23, id: 1, data: [
 * ...standardListData ]}]
 * const onPress = () => {};
 * return (
 *   <ScheduleList scheduleData={groupedData} onPress={onPress} />
 * )
 */
export const ScheduleList = ({ scheduleData, day, isSchedule, ...rest }) => {
  const navigation = useNavigation();
  const theme = useTheme();
  if (!scheduleData) return null;

  return (
    <>
      {scheduleData.map((item, index) => (
        <View key={index} {...rest}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <StyledText variant="title">
              {isSchedule ? item?.title : capitalize(day)}
            </StyledText>
            <StyledText>{isSchedule ? item?.subtitle : ""}</StyledText>
          </View>

          <View
            style={{
              marginTop: theme.spacing.large,
              marginBottom: theme.spacing.large,
            }}
          >
            {day &&
              item?.data[day].map(
                ({
                  title,
                  resourcesTitle,
                  subtitle,
                  image,
                  id,
                  itemSlug,
                  linkedScreen,
                }) => {
                  return (
                    <IconListItem
                      title={resourcesTitle ?? title}
                      image={image}
                      subtitle={subtitle}
                      key={`${item?.id}-${id}`}
                      onPress={() => {
                        navigation.navigate(linkedScreen ?? "Group", {
                          itemSlug,
                          title,
                        });
                      }}
                    />
                  );
                },
              )}
          </View>
        </View>
      ))}
    </>
  );
};
