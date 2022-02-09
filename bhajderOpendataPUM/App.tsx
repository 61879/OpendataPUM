import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {QueryClientProvider} from 'react-query';
import {queryClient} from './src/clients/queryClient';
import StackNavigator from './src/navigators/StackNavigator';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <SafeAreaView style={styles.container}> */}
      <StatusBar />
      <StackNavigator />
      {/* </SafeAreaView> */}
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

export default App;
