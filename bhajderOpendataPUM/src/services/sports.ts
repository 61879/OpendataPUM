import {httpClient} from '../clients/httpClient';
import {datasets} from '../clients/urls';

export const getOutdoorGyms = async () => {
  const response = await httpClient.get(datasets.outdoorGyms);
  return response.data;
};
