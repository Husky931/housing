import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ApartmentsListOverview from "../screens/ApartmentsListOverview";
import Test from "../screens/Test";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="apartment" component={ApartmentsListOverview} />
      <Stack.Screen name="test" component={Test} />
    </Stack.Navigator>
  );
}
