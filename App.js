import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider as Safer } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "./screens/Chat";
import Liked from "./screens/Liked";
import Me from "./screens/Me";
import Add from "./screens/Add";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Safer>
        <Tab.Navigator>
          <Tab.Screen name="home" component={HomeScreen} />
          <Tab.Screen name="chat" component={Chat} />
          <Tab.Screen name="add" component={Add} />
          <Tab.Screen name="liked" component={Liked} />
          <Tab.Screen name="me" component={Me} />
        </Tab.Navigator>
      </Safer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
