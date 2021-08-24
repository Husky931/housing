import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { ApartmentData } from "../apartmentData/ApartmentsList";
import globalStyles from "../globalStylesheet/app";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import { Carousel } from "../components/Carousel";

export default function ApartmentClicked({ route }) {
  const apartmentID = route.params.apartmentID;
  const apartmentData = useContext(ApartmentData).filter(
    (f) => f.id === apartmentID
  )[0];

  console.log(apartmentData, "i am apartmentData");

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        {/* <View style={styles.imagePreviewBox}>
          <Image style={styles.imageDisplay} source={apartmentData.image} />
        </View> */}
        <View>
          <Carousel
            style="slide"
            items={[
              { title: apartmentData },

              // {
              //   title: "About feature X.",
              // },
              // {
              //   title: "About feature Y.",
              // },
            ]}
          />
        </View>
        <View style={styles.box_one}>
          <Text style={[styles.redHighlightPrice, globalStyles.fontWeight800]}>
            {apartmentData.price} денари месечно
          </Text>
          <View style={globalStyles.row_start}>
            <Ionicons name="star-outline" size={25} color="#2eb6b6" />
            <Text style={[globalStyles.m_l_r_5, globalStyles.fontWeight700]}>
              КРАТКОРОЧНО - СЕ ИЗНАЈМУВА НА 1 ДО 6 МЕСЕЦИ
            </Text>
          </View>
          <View>
            <Text style={globalStyles.fontWeight700}>
              Тип на договор: {apartmentData.term}
            </Text>
            <Text style={globalStyles.fontWeight700}>
              Тип: {apartmentData.type}
            </Text>
            <Text style={globalStyles.fontWeight700}>
              Големина: {apartmentData.squareFeet} м2
            </Text>
            <Text style={globalStyles.fontWeight700}>
              Број на соби: {apartmentData.brojNaSobi}
            </Text>
          </View>
        </View>
        <View style={styles.box_two_tagsSection}>
          <Text
            style={[
              globalStyles.m_l_r_5,
              styles.highlightTags,
              globalStyles.m_t_b_5,
              globalStyles.padding_2,
              globalStyles.fontWeight700,
            ]}
          >
            Барам цимер
          </Text>
          <Text
            style={[
              globalStyles.m_l_r_5,
              styles.highlightTags,
              globalStyles.m_t_b_5,
              globalStyles.padding_2,
              globalStyles.fontWeight700,
            ]}
          >
            Викендица
          </Text>
          <Text
            style={[
              globalStyles.m_l_r_5,
              styles.highlightTags,
              globalStyles.m_t_b_5,
              globalStyles.padding_2,
              globalStyles.fontWeight700,
            ]}
          >
            Реновиран апартман
          </Text>
          <Text
            style={[
              globalStyles.m_l_r_5,
              styles.highlightTags,
              globalStyles.m_t_b_5,
              globalStyles.padding_2,
              globalStyles.fontWeight700,
            ]}
          >
            Барам цимер
          </Text>
        </View>
        <View style={styles.box_three_description}>
          <Text
            style={[
              globalStyles.fontWeight800,
              globalStyles.m_t_b_5,
              globalStyles.fontSize2,
            ]}
          >
            Краток опис
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  imagePreviewBox: {
    width: "100%",
    // height: "40%",
    height: 300,
  },
  imageDisplay: {
    width: "100%",
    height: "100%",
  },
  box_one: {
    width: "100%",
    padding: "4%",
    borderBottomWidth: 4,
    borderBottomColor: "silver",
  },
  box_two_tagsSection: {
    width: "100%",
    padding: "2%",
    borderBottomWidth: 4,
    borderBottomColor: "silver",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box_three_description: {
    width: "100%",
    padding: "4%",
    borderBottomWidth: 1,
    borderBottomColor: "silver",
  },
  redHighlightPrice: {
    color: "red",
    fontSize: responsiveFontSize(3),
  },
  highlightTags: {
    backgroundColor: "silver",
  },
});
