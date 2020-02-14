import React from 'react';
import Thing from './src/Thing';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

export default () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Thing />
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
