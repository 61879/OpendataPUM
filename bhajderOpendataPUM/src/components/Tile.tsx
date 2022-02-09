import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TileType} from '../dto/tiles';

interface TileProps extends TileType {
  onPress: () => void;
}

const Tile = ({
  name,
  onPress,
  icon = 'clipboard',
  color = '#aaa',
}: TileProps) => {
  return (
    <TouchableOpacity
      style={{...style.tile, backgroundColor: color || '#aaa'}}
      onPress={onPress}>
      <View style={style.tileContent}>
        <Icon style={style.icon} name={icon} />
        <Text style={style.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  tile: {
    marginBottom: 15,
    padding: 20,
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  tileContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    fontSize: 50,
    color: '#fff',
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
});

export default Tile;
