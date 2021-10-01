import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';

import styles from './index.style';

const Item = ({ title, avatar }) => (
  <View style={styles.item}>
    <Image style={styles.avatar} source={{ uri: avatar }} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const UserList = ({ data }) => {
  const renderItem = ({ item }) => <Item title={item.name} avatar={item.avatar} />;

  return <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />;
};

export default UserList;
