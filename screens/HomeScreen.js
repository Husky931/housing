import React, { useState, useEffect } from "react";
import RoundButton from "../components/RoundButton";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Button,
  Image,
  Pressable,
} from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useWindowDimensions } from "react-native";
import globalStyles from "../globalStylesheet/app";
import ApartmentsListOverview from "./ApartmentsListOverview";
import Test from "./Test";
// import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function HomeScreen() {
  const window = useWindowDimensions();
  let windowHeight = parseInt(window.height * 0.8);
  let windowWidth = parseInt(window.width * 0.8);

  const [pickCity, setPickCity] = useState(false);

  const HomeStack = createNativeStackNavigator();

  // const navigation = useNavigation();
  // useEffect(() => {
  //   console.log(navigation.navigate, "this is navigation");
  // });

  const flipPickCity = () => {
    setPickCity(!pickCity);
  };

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
  ];

  return (
    <View style={styles.container}>
      {pickCity && (
        <Pressable
          style={styles.absolute_city_picker}
          onPress={() => flipPickCity()}
        >
          <Pressable
            style={[
              styles.absolute_city_picker_box,
              { height: windowHeight, width: windowWidth, borderRadius: "10%" },
            ]}
          >
            <View
              style={[
                globalStyles.row,
                globalStyles.width100,
                globalStyles.mTopBottom_5,
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
                  globalStyles.m_l_r_2,
                ]}
              />
              <Image
                source={require("../images/front-shtip.jpeg")}
                style={[globalStyles.fr1, globalStyles.height100]}
              />
            </View>
            {cities.map((city, i) => (
              <Button
                key={i}
                style={styles.cities_list_IndividualCity_View}
                title={city}
                onPress={() => console.log(city)}
              ></Button>
            ))}
          </Pressable>
        </Pressable>
      )}

      <View style={styles.topRow}>
        <ImageBackground
          style={styles.img}
          source={require("../images/front-image.jpg")}
        >
          <View style={styles.whiteRoundArea}></View>
        </ImageBackground>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.buttonSection}>
          <RoundButton
            icon="search"
            type="font-awesome"
            size={17}
            text="Пребарај"
            bgColor={{ backgroundColor: "#2eb6b6" }}
            textColor={{ color: "white" }}
            iconColor="white"
            onPressAction={() => console.log("milk")}
          />
          {/* <Pressable onPress={() => navigation.navigate("apartment")}>
            <Text>Yo</Text>
          </Pressable> */}
          <RoundButton
            icon="chevron-down"
            type="font-awesome"
            size={17}
            text="Скопје"
            bgColor={{ backgroundColor: "white" }}
            textColor={{ color: "black" }}
            iconColor="black"
            onPressAction={() => flipPickCity()}
          />
        </View>
        {/* <HomeStack.Navigator>
          <HomeStack.Screen
            name="ApartmentsListOverview"
            component={ApartmentsListOverview}
          />
          <HomeStack.Screen name="Test" component={Test} />
        </HomeStack.Navigator> */}
        <View style={styles.around_you_section}>
          <Text style={styles.around_you_section_heading}>
            Во твоја близина
          </Text>

          <View style={styles.around_you_section_apartments_list}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.nav_tab_bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
  },
  absolute_city_picker: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 55,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  absolute_city_picker_box: {
    backgroundColor: "white",
    zIndex: 999,
    padding: "5%",
  },
  topRow: {
    height: "40%",
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  whiteRoundArea: {
    height: "20%",
    backgroundColor: "#f0f8ff",
    position: "absolute",
    // zIndex: -1,
    bottom: -1,
    left: 0,
    right: 0,
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
  },
  bottomRow: {
    width: "100%",
    backgroundColor: "#f0f8ff",
    flex: 1,
  },
  buttonSection: {
    marginTop: "-22%",
    alignItems: "center",
  },
  around_you_section: {
    marginTop: "10%",
    marginBottom: "3%",
  },
  around_you_section_heading: {
    fontWeight: "bold",
    fontSize: responsiveFontSize(3),
    marginLeft: "5%",
  },
  around_you_section_apartments_list: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 10,
  },
  cities_list_IndividualCity_View: {
    margin: "2%",
    marginBottom: "6%",
    borderBottomWidth: 2,
    borderBottomColor: "silver",
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
    textAlign: "left",
  },
  height60: {
    height: 60,
  },
  nav_tab_bottom: {},
});
