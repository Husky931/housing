import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Stat from "./stat";

export const Carousel = (props) => {
  const { item } = props;

  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

  const [intervals, setIntervals] = useState(1);
  const [width, setWidth] = useState(0);

  const init = (width) => {
    setWidth(width);

    const totalItems = item.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {item.map((item, index) => (
          <Stat
            key={index}
            index={index}
            label={item.label}
            value={item.value}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fbfbfb",
    borderColor: "#ebebeb",
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: "#fcfcfc",
    shadowOpacity: 1,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
});
