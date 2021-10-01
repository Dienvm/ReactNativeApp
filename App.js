import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./src/navigations/StackNavigator";
import BottomTabNavigator from "./src/navigations/TabNavigator";

const App = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
);
export default App;
