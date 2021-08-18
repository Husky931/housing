import React from "react";
import RoundButton from "../components/RoundButton";
import { StyleSheet, View, ImageBackground } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <ImageBackground
          style={styles.img}
          source={require("../images/front-image.jpg")}
        >
          <View style={styles.whiteRoundArea}></View>
        </ImageBackground>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.buttonSection}>
          <RoundButton
            icon="search"
            type="font-awesome"
            size={17}
            text="Пребарај"
            bgColor={{ backgroundColor: "#2eb6b6" }}
            textColor={{ color: "white" }}
            iconColor="white"
          />
          <RoundButton
            icon="chevron-down"
            type="font-awesome"
            size={17}
            text="Скопје"
            bgColor={{ backgroundColor: "white" }}
            textColor={{ color: "black" }}
            iconColor="black"
          />
        </View>
      </View>
      <View style={styles.nav_tab_bottom}></View>
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
  },
  whiteRoundArea: {
    height: "20%",
    backgroundColor: "#f0f8ff",
    position: "absolute",
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
  buttonSection: {
    marginTop: "-22%",
    alignItems: "center",
  },
  nav_tab_bottom: {},
});
