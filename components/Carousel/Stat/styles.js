import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  stat: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexBasis: "33%",
    flex: 1,
    width: "33%",
    maxHeight: 3000,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  // img: {
  //   width: "100%",
  //   height: "100%",
  // },
  statText: {
    width: "100%",
    textAlign: "left",
    fontSize: 20,
  },
  statHold: {
    width: "100%",
    marginBottom: 8,
  },
  statLabel: {
    width: "100%",
    textAlign: "left",
    fontSize: 11,
    fontWeight: "600",
    paddingTop: 5,
  },
});

export default styles;
