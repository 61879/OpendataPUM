import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
        <TouchableOpacity
          style={style.about}
          onPress={() =>
            navigation.navigate('About', {
              name: 'O aplikacji',
            })
          }>
          <Icon style={style.aboutIcon} name="info" />
          <Text style={style.aboutText}>O aplikacji</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  about: {
    padding: 10,
    height: 40,
    width: '100%',
    backgroundColor: '#aaa',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutText: {
    fontWeight: '600',
    color: '#fff',
  },
  aboutIcon: {
    fontSize: 20,
    marginRight: 20,
    color: '#fff',
  },
});

export default HomeScreen;
