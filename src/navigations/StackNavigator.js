import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../modules/Home/screens";
import About from "../modules/About/screens";
import Contact from "../modules/Contact/screens";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);

const ContactStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="Contact" component={Contact} />
  </Stack.Navigator>
);

export { MainStackNavigator, ContactStackNavigator };
