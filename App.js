import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider as Safer } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigation from "./navigation/BottomNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <Safer>
        <Navigation />
      </Safer>
    </NavigationContainer>
  );
}
