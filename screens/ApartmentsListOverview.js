import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
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
      price: "15000",
      image: require("../images/apartment-images/1.jpeg"),
    },
    {
      id: 2,
      address: "Skopje, Pitu Guli 16",
      squareFeet: 63,
      term: "long term",
      type: "one room",
      price: "2200",
      image: require("../images/apartment-images/2.jpeg"),
    },
    {
      id: 3,
      address:
        "Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223",
      squareFeet: 63,
      term: "long term",
      type: "whole apartment",
      price: "15000",
      image: require("../images/apartment-images/3.jpeg"),
    },
    {
      id: 4,
      address: "Shtip, Vanco Prke 63/6",
      squareFeet: 13,
      term: "long term",
      type: "whole apartment",
      price: "15000",
      image: require("../images/apartment-images/1.jpeg"),
    },
    {
      id: 5,
      address: "Skopje, Pitu Guli 16",
      squareFeet: 63,
      term: "long term",
      type: "one room",
      price: "2200",
      image: require("../images/apartment-images/2.jpeg"),
    },
    {
      id: 6,
      address:
        "Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223",
      squareFeet: 63,
      term: "long term",
      type: "whole apartment",
      price: "15000",
      image: require("../images/apartment-images/3.jpeg"),
    },
    {
      id: 7,
      address: "Shtip, Vanco Prke 63/6",
      squareFeet: 13,
      term: "long term",
      type: "whole apartment",
      price: "15000",
      image: require("../images/apartment-images/1.jpeg"),
    },
    {
      id: 8,
      address: "Skopje, Pitu Guli 16",
      squareFeet: 63,
      term: "long term",
      type: "one room",
      price: "2200",
      image: require("../images/apartment-images/2.jpeg"),
    },
    {
      id: 9,
      address:
        "Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223",
      squareFeet: 63,
      term: "long term",
      type: "whole apartment",
      price: "15000",
      image: require("../images/apartment-images/3.jpeg"),
    },
    {
      id: 10,
      address: "Shtip, Vanco Prke 63/6",
      squareFeet: 13,
      term: "long term",
      type: "whole apartment",
      price: "15000",
      image: require("../images/apartment-images/1.jpeg"),
    },
    {
      id: 11,
      address: "Skopje, Pitu Guli 16",
      squareFeet: 63,
      term: "long term",
      type: "one room",
      price: "2200",
      image: require("../images/apartment-images/2.jpeg"),
    },
    {
      id: 12,
      address:
        "Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223, Ohrid, Pozadi Karpos 223",
      squareFeet: 63,
      term: "long term",
      type: "whole apartment",
      price: "15000",
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
              <Text style={globalStyles.fontWeight600}>- {item.address}</Text>
              <Text style={globalStyles.fontWeight600}>
                - {item.squareFeet} m2
              </Text>
              <Text style={globalStyles.fontWeight600}>- {item.term}</Text>
              <Text style={globalStyles.fontWeight600}>- {item.type}</Text>
              <Text style={styles.price}>- {item.price} denari mesecno</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flatListStyle: {
    width: "100%",
    height: "auto",
  },
  boxContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "silver",
    marginTop: "2%",
  },
  imagePreviewContainer: {
    flex: 1,
    height: 115,
    padding: 10,
  },
  imagePreview: {
    height: "100%",
    width: "100%",
  },
  textDescription: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    fontWeight: "bold",
  },
  price: {
    color: "red",
    fontSize: responsiveFontSize(2),
    fontWeight: "700",
  },
});
