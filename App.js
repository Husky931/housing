import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider as Safer } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTabBottom from "./navigation/BottomNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <Safer>
        <NavigationTabBottom />
      </Safer>
    </NavigationContainer>
  );
}
