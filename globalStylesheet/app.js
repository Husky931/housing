import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  row_start: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  m_l_r_5: {
    marginLeft: 5,
    marginRight: 5,
  },
  m_t_b_5: {
    marginTop: 5,
    marginBottom: 5,
  },
  padding_2: {
    padding: 4,
  },
  mTopBottom_5: {
    marginTop: 5,
    marginBottom: 5,
  },
  width100: {
    width: "100%",
  },
  height100: {
    height: "100%",
  },
  fr1: {
    flex: 1,
  },
  fr2: {
    flex: 2,
  },
  fr3: {
    flex: 4,
  },
  textCenter: {
    textAlign: "center",
  },
  fontWeight500: {
    fontWeight: "500",
  },
  fontWeight600: {
    fontWeight: "600",
  },
  fontWeight700: {
    fontWeight: "700",
  },
  fontWeight800: {
    fontWeight: "800",
  },
  fontWeight900: {
    fontWeight: "900",
  },
  fontSize2: {
    fontSize: responsiveFontSize(2),
  },
  fontSize3: {
    fontSize: responsiveFontSize(3),
  },
});
