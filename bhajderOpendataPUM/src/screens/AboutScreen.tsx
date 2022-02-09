import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AboutScreen = () => {
  return (
    <View>
      <Text style={style.text}>
        Projekt został zrealizowany w ramach przedmiotu Programowanie Urządzeń
        Mobilnych
      </Text>
      <Text style={style.text}>
        Aplikacja pobiera dane z serwisu otartedane.erzeszów.pl:{'\n'}
        {'\n'}- Listę przystanków autobusowych - po kliknięciu w przystanek
        przekierowuje do nawigacji;{'\n'}
        {'\n'}- Listę planowanych stacji ładowania pojazdów elektrycznych -
        przenosi do nawigacji {'\n'}
        {'\n'} - oraz listę danych z kamer rynku - ilość odwiedzin rynku we
        wskazanym okresie{'\n'}
      </Text>
      <Text style={style.text}>Wykonał: Bartłomiej Hajder</Text>
      <Text style={style.text}>
        Wyższa Szkoła Informatyki i Zarządzania w Rzeszowie
      </Text>
      <Text style={style.text}>Rzeszów 2022</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontWeight: '500',
    padding: 10,
  },
});

export default AboutScreen;
