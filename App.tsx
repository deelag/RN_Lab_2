import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Category from "./src/screens/Category";
import { RootStackParamList } from "./src/types/types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="Category"
          component={Category}
          options={{ presentation: "modal" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
