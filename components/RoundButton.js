import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function RoundButton() {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => console.log("yoo")}>
      <View>
        <Text style={styles.text}>Hong Kongk</Text>
      </View>
    </TouchableOpacity>
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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
  },
  text: {
    fontWeight: "bold",
    // fontSize: 33,
    fontSize: responsiveFontSize(2.4),
  },
});
