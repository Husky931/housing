import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import globalStyles from "../globalStylesheet/app";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default function ApartmentsListOverview() {
  const data = [
    {
      id: 1,
      address: "Shtip, Vanco Prke 63/6",
      squareFeet: 13,
      term: "long term",
      type: "whole apartment",
      price: "15000 month",
      image: require("../images/apartment-images/1.jpeg"),
    },
    {
      id: 2,
      address: "Skopje, Pitu Guli 16",
      squareFeet: 63,
      term: "long term",
      type: "one room",
      price: "2200 mesecno",
      image: require("../images/apartment-images/2.jpeg"),
    },
    {
      id: 3,
      address: "Ohrid, Pozadi Karpos 223",
      squareFeet: 63,
      term: "long term",
      type: "whole apartment",
      price: "15000 month",
      image: require("../images/apartment-images/3.jpeg"),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListStyle}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.boxContainer}>
            <View style={styles.imagePreviewContainer}>
              <Image style={styles.imagePreview} source={item.image} />
            </View>
            <View style={styles.textDescription}>
              <Text>{item.address}</Text>
              <Text>{item.squareFeet}</Text>
              <Text>{item.term}</Text>
              <Text>{item.type}</Text>
              <Text>{item.price}</Text>
            </View>
          </View>
        )}
        // renderItem={(item) => <Text>hi</Text>}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* <Image source={data[0].image} /> */}
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
  flatListStyle: {
    width: "100%",
  },
  boxContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
  imagePreviewContainer: {
    flex: 1,
  },
  imagePreview: {
    height: "100%",
    width: "100%",
  },
  textDescription: {
    flex: 2,
    justifyContent: "flex-start",
    fontWeight: "bold",
  },
});
