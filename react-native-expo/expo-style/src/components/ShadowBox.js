import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

export default () => {
  return <View style={styles.shadow}></View>;
};

const styles = StyleSheet.create({
  shadow: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
});
