import React, { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
import PropTypes from "prop-types";

// components
import UserList from "../components/UserList";

import { getAllUsers } from "../services";
import styles from "./index.style";

const Home = ({ navigation }) => {
  const [users, setUser] = useState([]);

  const getMyUserList = async () => {
    const data = await getAllUsers();
    setUser(!!data && data.length ? data : []);
  };

  useEffect(() => {
    getMyUserList();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
      />

      <UserList data={users} />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
