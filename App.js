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
          {/* <View style={styles.whiteRoundArea}></View> */}
          {/* <Text style={styles.text}>Mhm</Text> */}
        </ImageBackground>
      </View>

      <View style={styles.bottomRow}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  topRow: {
    height: "35%",
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  whiteRoundArea: {
    height: 10,
    backgroundColor: "yellow",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    color: "black",
  },
  bottomRow: {
    width: "100%",
    // backgroundColor: "#f0f8ff",
    backgroundColor: "red",
  },
});
