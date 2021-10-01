import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./src/navigations/StackNavigator";

const App = () => (
  <NavigationContainer>
    <MainStackNavigator />
  </NavigationContainer>
);
export default App;
