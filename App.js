import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider as Safer } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ApartmentsListOverview from "./screens/ApartmentsListOverview";
import ApartmentClicked from "./screens/ApartmentClicked";
import TabNavigationHomeBottom from "./navigation/TabNavigation-HomeBottom";

const Stack = createStackNavigator();
// export const GlobalData = createContext();

export default function App() {
  return (
    <Safer>
      {/* <GlobalData.Provider> */}
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
      {/* </GlobalData.Provider> */}
    </Safer>
  );
}
