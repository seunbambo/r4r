import React, { useRef, useState } from "react";
import SnapCarousel, { Pagination } from "react-native-snap-carousel";
import { View, useWindowDimensions } from "react-native";
import { useTheme } from "react-native-paper";

const DOT_TOP = 50;

const Item = ({ item }) => (
  <View
    style={{
      width: "100%",
      height: "100%",
    }}
  >
    {item}
  </View>
);

export const Carousel = ({ children, contentHeight, ...rest }) => {
  const carousel = useRef();
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={{ height: contentHeight, marginBottom: DOT_TOP, ...rest }}>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "center",
          height: contentHeight,
          width,
        }}
      >
        <SnapCarousel
          layout={"default"}
          ref={carousel}
          data={children}
          sliderWidth={width}
          itemWidth={width}
          height={contentHeight}
          renderItem={Item}
          onSnapToItem={(index) => {
            setActiveIndex(index);
          }}
        />
      </View>
      <View style={{ top: DOT_TOP }}>
        <Pagination
          dotsLength={children.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: theme.colors.white,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};
