import {httpClient} from '../clients/httpClient';
import {datasets} from '../clients/urls';
import Papa from 'papaparse';

export const getBusStops = async () => {
  const response = await httpClient.get(
    `${datasets.busStops}/resources/?format=json`,
  );

  if (response.data) {
    const parseCSV = fetch(response.data[0].file)
      .then(res => res.text())
      .then(v => Papa.parse(v));
    return parseCSV;
  }
  return response.data;
};
