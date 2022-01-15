import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import globalStyles from "../globalStylesheet/app";

export default function Radio({ radioBtnNames, radioBtnSymbols }) {
  const [checked, setChecked] = useState(0);
  return (
    <View>
      <View style={styles.btn}>
        {radioBtnNames.map((radioBtnNames, key) => {
          return (
            <View key={radioBtnNames}>
              {checked == key ? (
                <Pressable
                  style={[
                    globalStyles.row_between,
                    globalStyles.m_t_b_5,
                    globalStyles.borderBottom,
                    globalStyles.p_t_b_5,
                  ]}
                >
                  <View style={globalStyles.row}>
                    <Image
                      source={radioBtnSymbols[key]}
                      style={[styles.symbols, globalStyles.m_l_r_6]}
                    />
                    <Text style={globalStyles.fontSize25}>{radioBtnNames}</Text>
                  </View>
                  <Image
                    style={styles.img}
                    source={require("../images/radio_Checked.png")}
                  />
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    setChecked(key);
                  }}
                  style={[
                    globalStyles.row_between,
                    globalStyles.m_t_b_5,
                    globalStyles.borderBottom,
                    globalStyles.p_t_b_5,
                  ]}
                >
                  <View style={globalStyles.row}>
                    <Image
                      source={radioBtnSymbols[key]}
                      style={[styles.symbols, globalStyles.m_l_r_6]}
                    />
                    <Text style={globalStyles.fontSize25}>{radioBtnNames}</Text>
                  </View>

                  <Image
                    style={styles.img}
                    source={require("../images/radio_Unchecked.png")}
                  />
                </Pressable>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  radio: {
    flexDirection: "row",
  },
  img: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  symbols: {
    height: 16,
    width: 22,
  },
});
