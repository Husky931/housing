import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import globalStyles from "../globalStylesheet/app";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default function ApartmentsListOverview() {
  useEffect(() => {
    console.log("i have been rendered ApartmentsListOverview");
  });
  return (
    <View style={styles.container}>
      <Text>I am the ApartmentsListOverview</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});
