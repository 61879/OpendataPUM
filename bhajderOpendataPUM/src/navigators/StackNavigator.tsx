import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BusStopsDetailsScreen from '../screens/BusStopsDetailsScreen';
import CarChargersDetailsScreen from '../screens/CarChargersDetailsScreen';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  BusStopsDetails: undefined;
  CarChargersDetails: undefined;
  TicketMachines: undefined;
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
          component={BusStopsDetailsScreen}
          options={({route}) => ({headerTitle: route.params.name})}
        />
        <Stack.Screen
          name="CarChargersDetails"
          component={CarChargersDetailsScreen}
          options={({route}) => ({headerTitle: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
