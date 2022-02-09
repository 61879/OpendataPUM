import React, {useEffect, useState} from 'react';
import {View, Text, useColorScheme, StyleSheet, ScrollView} from 'react-native';
import {datasets} from '../clients/urls';
import Tile, {TileType} from '../components/Tile';

const tiles: TileType[] = [
  {
    datasetId: datasets.busStops,
    name: 'Przystanki autobusowe',
    icon: 'bus',
    onPress: () => {},
    color: 'blue',
  },
  {
    datasetId: datasets.electrowasteBins,
    name: 'Kosze na elektroodpady',
    icon: 'plug',
    onPress: () => {},
    color: 'orange',
  },
  {
    datasetId: datasets.outdoorGyms,
    name: 'Siłownie na wolnym powietrzu',
    icon: 'fist-raised',
    onPress: () => {},
    color: 'green',
  },
  {
    datasetId: datasets.playgrounds,
    name: 'Place zabaw',
    icon: 'child',
    onPress: () => {},
    color: 'orchid',
  },
  {
    datasetId: datasets.ticketMachines,
    name: 'Biletomaty',
    icon: 'coins',
    onPress: () => {},
    color: 'navy',
  },
  {
    datasetId: datasets.wateringPlaces,
    name: 'Kąpieliska',
    icon: 'swimmer',
    onPress: () => {},
    color: 'powderblue',
  },
];

const HomeScreen = () => {
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
            onPress={tile.onPress}
            icon={tile.icon}
            color={tile.color}
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
