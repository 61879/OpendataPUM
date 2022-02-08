import {httpClient} from '../clients/httpClient';
import {datasets} from '../clients/urls';

export const getElectrowasteBins = async () => {
  const response = await httpClient.get(datasets.electrowasteBins);
  return response;
};
