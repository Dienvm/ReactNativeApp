import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="HomeStack" component={TabNavigator} />
    <Drawer.Screen name="ContactStack" component={ContactStackNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
