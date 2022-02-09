import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DatasetDetailsScreen from '../screens/BusStopsDetailsScreen';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  BusStopsDetails: {
    name: string;
  };
  CarChargersDetails: {
    name: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Otwarte dane eRzeszów'}}
        />
        <Stack.Screen
          name="BusStopsDetails"
          component={DatasetDetailsScreen}
          options={({route}) => ({headerTitle: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
