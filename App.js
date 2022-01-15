import "react-native-gesture-handler"
import React, { useState } from "react"
import { SafeAreaProvider as Safer } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import ApartmentsListOverview from "./screens/ApartmentsListOverview"
import ApartmentClicked from "./screens/ApartmentClicked"
import TabNavigationHomeBottom from "./navigation/TabNavigation-HomeBottom"
import { GlobalData } from "./components/context"

const Stack = createStackNavigator()

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <Safer>
            <GlobalData.Provider
                value={{
                    loggedIn,
                    setLoggedIn,
                }}
            >
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                        initialRouteName={"Home"}
                    >
                        <Stack.Screen name="Home" component={TabNavigationHomeBottom} />
                        <Stack.Screen
                            name="ApartmentsListOverview"
                            component={ApartmentsListOverview}
                            options={{
                                headerShown: true,
                            }}
                        />
                        <Stack.Screen
                            name="ApartmentClicked"
                            component={ApartmentClicked}
                            options={{
                                headerShown: true,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </GlobalData.Provider>
        </Safer>
    )
}
