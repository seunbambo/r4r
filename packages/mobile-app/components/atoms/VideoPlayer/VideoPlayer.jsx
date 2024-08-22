import React, { useState, useCallback } from "react";
import { Alert } from "react-native";
import YoutubeIFrame from "react-native-youtube-iframe";
import { VideoWrapper } from "./VideoPlayer.styles";

export function VideoPlayer({ videoId, height }) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <VideoWrapper>
      <YoutubeIFrame
        height={height ?? 300}
        play={playing}
        videoId={videoId ?? "zH9QxHhDjy4"}
        onChangeState={onStateChange}
      />
    </VideoWrapper>
  );
}
