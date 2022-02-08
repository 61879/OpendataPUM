import {httpClient} from '../clients/httpClient';
import {datasets} from '../clients/urls';

export const getBusStops = async () => {
  const response = await httpClient.get(datasets.busStops);
  return response;
};

export const getTicketMachines = async () => {
  const response = await httpClient.get(datasets.ticketMachines);
  return response;
};
