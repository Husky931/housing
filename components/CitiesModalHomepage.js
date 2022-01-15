import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useWindowDimensions } from "react-native";
import i18n from "i18n-js";
import globalStyles from "../globalStylesheet/app";
import { useNavigation } from "@react-navigation/native";

export default function CitiesModalHomepage({ setPickCity, pickCity }) {
  const window = useWindowDimensions();
  let windowHeight = parseInt(window.height * 0.8);
  let windowWidth = parseInt(window.width * 0.8);

  const cities = [
    "Скопје",
    "Штип",
    "Охрид",
    "Дојран",
    "Преспа",
    "Битола",
    "Струмица",
    "Куманово",
    "Прилеп",
    "Тетово",
    "Велес",
    "Битола",
    "Струмица",
    "Куманово",
    "Прилеп",
    "Тетово",
    "Велес",
  ];

  return (
    <>
      {pickCity && (
        <Pressable
          style={styles.absolute_city_picker}
          onPress={() => setPickCity(false)}
        >
          <View
            style={[
              styles.absolute_city_picker_box,
              {
                height: windowHeight,
                width: windowWidth,
                borderRadius: 10,
              },
            ]}
          >
            <View
              style={[
                globalStyles.row,
                globalStyles.width100,
                globalStyles.mTopBottom_5,
                globalStyles.mBottom10,
                styles.height60,
              ]}
            >
              <Image
                source={require("../images/front-skopje.jpeg")}
                style={[globalStyles.fr1, globalStyles.height100]}
              />
              <Image
                source={require("../images/front-ohrid.jpg")}
                style={[
                  globalStyles.fr1,
                  globalStyles.height100,
                  globalStyles.m_l_r_5,
                ]}
              />
              <Image
                source={require("../images/front-shtip.jpeg")}
                style={[globalStyles.fr1, globalStyles.height100]}
              />
            </View>
            <ScrollView nestedScrollEnabled={true}>
              {cities.map((city, i) => (
                <Pressable
                  key={i}
                  onPress={() => console.log(city)}
                  style={styles.cities_list_IndividualCity_View}
                >
                  <Text style={styles.cities_list_IndividualCity_Text}>
                    {city}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  absolute_city_picker: {
    position: "absolute",
    top: 40,
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  absolute_city_picker_box: {
    backgroundColor: "white",
    zIndex: 999,
    padding: "5%",
    marginTop: "10%",
  },
  height60: {
    height: 60,
  },
  cities_list_IndividualCity_View: {
    margin: "2%",
    marginBottom: "6%",
    borderBottomWidth: 1,
    borderBottomColor: "silver",
  },
  cities_list_IndividualCity_Text: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
    textAlign: "left",
    paddingBottom: 3,
  },
});
