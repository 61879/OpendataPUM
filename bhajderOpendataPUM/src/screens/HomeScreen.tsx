import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Tile from '../components/Tile';
import {tiles} from '../dto/tiles';
import {RootStackParamList} from '../navigators/StackNavigator';

type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<authScreenProp>();
  useEffect(() => {
    fetch('https://erzeszow.pl/');
  }, []);

  return (
    <View style={style.container}>
      <ScrollView>
        {tiles.map(tile => (
          <Tile
            key={tile.datasetId}
            datasetId={tile.datasetId}
            name={tile.name}
            onPress={() =>
              navigation.navigate(tile.route, {
                name: tile.name,
              })
            }
            icon={tile.icon}
            color={tile.color}
            route={tile.route}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default HomeScreen;
