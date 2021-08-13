import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <ImageBackground
          style={styles.img}
          source={require("./front-image.jpg")}
        >
          <View style={styles.whiteRoundArea}></View>
        </ImageBackground>
      </View>
      <View style={styles.bottomRow}>{/* <Text>mh</Text> */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  topRow: {
    height: "40%",
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 800,
  },
  whiteRoundArea: {
    height: "20%",
    backgroundColor: "#f0f8ff",
    position: "absolute",
    zIndex: 999,
    bottom: -1,
    left: 0,
    right: 0,
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
  },
  bottomRow: {
    width: "100%",
    backgroundColor: "#f0f8ff",
    flex: 1,
  },
});
