import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { MainStackNavigator } from "./src/navigations/StackNavigator";
// import BottomTabNavigator from "./src/navigations/TabNavigator";
import DrawerNavigator from "./src/navigations/DrawerNavigator";

const App = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);
export default App;
