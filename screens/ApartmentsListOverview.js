import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import globalStyles from "../globalStylesheet/app";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default function ApartmentsListOverview() {
  const data = [
    {
      address: "Shtip, Vanco Prke 63/6",
      squareFeet: 13,
      term: "long term",
      type: "whole apartment",
      price: "15000 month",
      image: require("../images/apartment-images/1.jpeg"),
    },
    {
      address: "Skopje, Pitu Guli 16",
      squareFeet: 63,
      term: "long term",
      type: "one room",
      price: "2200 mesecno",
      image: require("../images/apartment-images/2.jpeg"),
    },
    {
      address: "Ohrid, Pozadi Karpos 223",
      squareFeet: 63,
      term: "long term",
      type: "whole apartment",
      price: "15000 month",
      image: require("../images/apartment-images/3.jpeg"),
    },
  ];

  useEffect(() => {
    console.log(data[0].image);
  });

  return (
    <View style={styles.container}>
      <Text>I am the ApartmentsListOverview</Text>

      <Image source={data[0].image} />
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
    backgroundColor: "yellow",
  },
});
