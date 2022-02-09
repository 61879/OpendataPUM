import {datasets} from '../clients/urls';
import {RootStackParamList} from '../navigators/StackNavigator';

export interface TileType {
  datasetId: string;
  name: string;
  icon?: string;
  color?: string;
  route: keyof RootStackParamList;
}

export const tiles: TileType[] = [
  {
    datasetId: datasets.busStops,
    name: 'Przystanki autobusowe',
    icon: 'bus',
    color: 'blue',
    route: 'BusStopsDetails',
  },
  {
    datasetId: datasets.carChargers,
    name: 'Ładowarki samochodów elektryczych',
    icon: 'plug',
    color: 'orange',
    route: 'BusStopsDetails',
  },
  {
    datasetId: datasets.outdoorGyms,
    name: 'Siłownie na wolnym powietrzu',
    icon: 'fist-raised',
    color: 'seagreen',
    route: 'BusStopsDetails',
  },
  {
    datasetId: datasets.playgrounds,
    name: 'Place zabaw',
    icon: 'child',
    color: 'mediumorchid',
    route: 'BusStopsDetails',
  },
  {
    datasetId: datasets.ticketMachines,
    name: 'Biletomaty',
    icon: 'coins',
    color: 'navy',
    route: 'BusStopsDetails',
  },
  {
    datasetId: datasets.wateringPlaces,
    name: 'Kąpieliska',
    icon: 'swimmer',
    color: 'powderblue',
    route: 'BusStopsDetails',
  },
];
