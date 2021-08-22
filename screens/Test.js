import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import globalStyles from "../globalStylesheet/app";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default function Test() {
  useEffect(() => {
    console.log("i have also been rendered - Test");
  });
  return (
    <View style={styles.container}>
      <Text>I am the Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
