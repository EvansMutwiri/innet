import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
  },
});
