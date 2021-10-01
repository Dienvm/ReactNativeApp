import React from "react";
import { View, Button, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./index.style";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>This is the home screen</Text>
    <Button
      title="Go to About Screen"
      onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
    />
  </View>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
