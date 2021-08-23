import React, { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ApartmentData } from "../apartmentData/ApartmentsList";
import globalStyles from "../globalStylesheet/app";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default function ApartmentClicked({ route }) {
  const apartmentID = route.params.apartmentID;
  const apartmentData = useContext(ApartmentData).filter(
    (f) => f.id === apartmentID
  );
  console.log(apartmentData);

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
