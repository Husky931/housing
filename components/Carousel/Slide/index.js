import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export const Slide = (props) => {
  // const { image } = props;

  console.log(props, "zzzz");
  return (
    <View style={styles.slide}>
      <Image source={props.title.image} style={{ ...styles.slideText }} />
    </View>
  );
};

export default Slide;
