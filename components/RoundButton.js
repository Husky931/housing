import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function RoundButton() {
  return (
    <View style={styles.btn}>
      <Text style={styles.text}>Hong Kong</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "yellow",
    width: "80%",
    height: 60,
    borderWidth: 0.2,
    borderColor: "#20232a",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
  },
  text: {
    fontWeight: "bold",
    // fontSize: 33,
    fontSize: responsiveFontSize(2),
  },
});
