import { StyleSheet } from "react-native"
import { responsiveFontSize } from "react-native-responsive-dimensions"

export default StyleSheet.create({
    primaryColor: {
        color: "#2eb6b6",
    },
    primaryColorBg: {
        backgroundColor: "#2eb6b6",
    },
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
    row_start_bottom: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
    },
    row_between: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    col_center: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    m_l_r_5: {
        marginLeft: 5,
        marginRight: 5,
    },
    m_l_r_6: {
        marginLeft: 6,
        marginRight: 6,
    },
    m_t_b_5: {
        marginTop: 5,
        marginBottom: 5,
    },
    m_t_b_2: {
        marginTop: 2,
        marginBottom: 2,
    },
    m_t_b_1: {
        marginVertical: 1,
    },
    m_t_b_20: {
        marginTop: 20,
        marginBottom: 20,
    },
    m_t_b_8: {
        marginTop: 8,
        marginBottom: 8,
    },
    p_t_b_5: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    p_t_b_2: {
        paddingTop: 2,
        paddingBottom: 2,
    },
    p_l_8: {
        paddingLeft: 8,
    },
    p_t_b_10: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    p_t_b_20: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    mBottom10: {
        marginBottom: 10,
    },
    padding_4: {
        padding: 4,
    },
    padding_30: {
        padding: 30,
    },
    width100: {
        width: "100%",
    },
    height100: {
        height: "100%",
    },
    heightAuto: {
        height: "auto",
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
    textLeft: {
        textAlign: "left",
    },
    textRight: {
        textAlign: "right",
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
    fontSize1: {
        fontSize: responsiveFontSize(1.85),
    },
    fontSize2: {
        fontSize: responsiveFontSize(2),
    },
    fontSize25: {
        fontSize: responsiveFontSize(2.3),
    },
    fontSize3: {
        fontSize: responsiveFontSize(3),
    },
    black: {
        color: "black",
    },
    white: {
        color: "white",
    },
    red: {
        color: "red",
    },
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: "#2eb6b6",
    },
    borderBottom: {
        borderBottomWidth: 0.5,
        borderBottomColor: "#2eb6b6",
    },
    bgColorMain: {
        backgroundColor: "#f0f8ff",
    },
    bgWhite: {
        backgroundColor: "white",
    },
    relative: {
        position: "relative",
    },
    absolute: {
        position: "absolute",
    },
})
