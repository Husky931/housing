import "react-native-gesture-handler";
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
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Safer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "дома") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "пораки") {
                iconName = focused ? "chatbubbles" : "chatbubbles-outline";
              } else if (route.name === "додади") {
                // iconName = focused ? "add-circle" : "add-circle-outline";
                iconName = "add-circle";
              } else if (route.name === "фаворити") {
                iconName = focused ? "heart" : "heart-outline";
              } else if (route.name === "јас") {
                iconName = focused ? "person" : "person-outline";
              }

              return <Ionicons name={iconName} size={25} color="#2eb6b6" />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="дома"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="пораки"
            component={Chat}
            options={{ tabBarBadge: 3 }}
          />
          <Tab.Screen
            name="додади"
            component={Add}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ size }) => (
                <Ionicons
                  name="add-circle"
                  color="#2eb6b6"
                  size={43}
                  style={{ position: "absolute", top: 0 }}
                />
              ),
            }}
          />
          <Tab.Screen name="фаворити" component={Liked} />
          <Tab.Screen name="јас" component={Me} />
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
