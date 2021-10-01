import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="HomeTab" component={MainStackNavigator} />
    <Tab.Screen name="ContactTab" component={ContactStackNavigator} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
