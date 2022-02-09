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
    route: 'CarChargersDetails',
  },
  {
    datasetId: datasets.citySquare,
    name: 'Rynek Rzeszowski',
    icon: 'video',
    color: 'navy',
    route: 'CitySquareDetails',
  },
];
