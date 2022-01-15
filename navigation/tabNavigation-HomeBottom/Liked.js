import React, { useContext } from "react"
import { Text, Image, View, StyleSheet } from "react-native"

// import { GlobalData } from "../../App";
import { GlobalData } from "../../components/context"
import globalStyles from "../../globalStylesheet/app"

export default function Liked() {
    const { loggedIn } = useContext(GlobalData)

    if (loggedIn) {
        return <Text>logged is true</Text>
    }
    if (!loggedIn) {
        return (
            <View style={styles.container}>
                <View style={styles.imgBox}>
                    <Image source={require("../../images/smajli.png")} style={styles.img} />
                </View>
                <Text style={[globalStyles.fontWeight700, globalStyles.fontSize2]}>Please Log In</Text>
            </View>
        )
    }

    return <Text>Text</Text>
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    imgBox: {
        width: 70,
        height: 70,
        marginBottom: 40,
    },
    img: {
        height: "100%",
        width: "100%",
    },
})
