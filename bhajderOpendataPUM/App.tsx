import React, {useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState('errr');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const tryToFetch = async () => {
    try {
      await fetch('https://erzeszow.pl/');
      const response = await fetch(
        'https://otwartedane.erzeszow.pl/v1/datasets/109/resources/?format=json',
      );
      setText(await response.text());
    } catch (err) {
      setText('error');
      Alert.alert('err');
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button onPress={() => tryToFetch()} title="123" />
          <Text>{text}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
