import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export const Stat = (props: any) => {
  const { label, value } = props;
  console.log(value);
  return (
    <>
      <View style={styles.stat}>
        <Image source={value.image[0]} style={styles.img} />
        {/* <Text style={{ ...styles.statText }}>{value}</Text>
      <View style={styles.statHold}>
        <Text style={{ ...styles.statLabel }}>{label}</Text>
      </View> */}
        <Text>{value.price} denari</Text>
        <Text numberOfLines={1}>{value.address}</Text>
      </View>
    </>
  );
};

export default Stat;
