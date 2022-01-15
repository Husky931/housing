import React, { useContext, useEffect, useState } from "react"
import { Text, Pressable } from "react-native"
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions"
import i18n from "i18n-js"

import { useNavigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import LoginRegisterModal from "../../components/LoginRegisterModal"
import { GlobalData } from "../../components/context"

export default function Add() {
    // const { loggedIn } = useContext(GlobalData)
    const [loggedIn, setLoggedIn] = useState(false)

    if (loggedIn) {
        return <AddScreen />
    } else {
        return <LoginRegisterModal />
    }
}

function AddScreen() {
    const navigation = useNavigation()
    const { loggedIn, httpRequest } = useContext(GlobalData)

    useEffect(() => {}, [loggedIn])

    return (
        <>
            <Pressable onPress={() => navigation.navigate(i18n.t("addListing.title"))}>
                <Text>Next Step</Text>
            </Pressable>
        </>
    )
}

export function AddListingScreens() {
    const Stack = createStackNavigator()
    return [
        <Stack.Screen
            key="1"
            title={i18n.t("addListing.title")}
            name={i18n.t("addListing.title")}
            component={AddListingTitle}
            options={{
                headerShown: true,
                headerBackTitle: i18n.t("stack.backBtn"),
            }}
        />,
        <Stack.Screen
            key="2"
            title={i18n.t("addListing.tagsAndDescription")}
            name={i18n.t("addListing.tagsAndDescription")}
            component={AddListingTagsAndDesc}
            options={{
                headerShown: true,
                headerBackTitle: i18n.t("stack.backBtn"),
            }}
        />,
        <Stack.Screen
            key="3"
            title={i18n.t("addListing.price")}
            name={i18n.t("addListing.price")}
            component={AddListingPrice}
            options={{
                headerShown: true,
                headerBackTitle: i18n.t("stack.backBtn"),
            }}
        />,
    ]
}
