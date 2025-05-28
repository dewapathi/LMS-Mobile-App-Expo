import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Optional: background color
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});
