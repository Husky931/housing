import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

export const Slide = (props) => {
  return (
    <View style={styles.slide}>
      <Image source={{ uri: props.title }} style={styles.slideText} />
    </View>
  );
};

export default Slide;
