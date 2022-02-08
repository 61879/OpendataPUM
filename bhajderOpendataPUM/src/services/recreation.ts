import {httpClient} from '../clients/httpClient';
import {datasets} from '../clients/urls';

export const getWateringPlaces = async () => {
  const response = await httpClient.get(datasets.wateringPlaces);
  return response;
};

export const getPlaygrounds = async () => {
  const response = await httpClient.get(datasets.playgrounds);
  return response;
};
