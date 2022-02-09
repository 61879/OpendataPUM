import Papa from 'papaparse';
import {httpClient, httpResourcesClient} from '../clients/httpClient';
import {datasets} from '../clients/urls';

export const getCarChargers = async () => {
  const response = await httpClient.get(
    `/${datasets.carChargers}/resources/?format=json`,
  );

  if (response.data) {
    const parseCSV = fetch(response.data[1].file)
      .then(res => res.text())
      .then(v => Papa.parse(v));
    return parseCSV;
  }

  return response.data;
};

export const getCitySquareCameras = async () => {
  const response = await httpResourcesClient.get(
    `/${datasets.citySquare}/?format=json`,
  );

  if (response.data) {
    const parseCSV = fetch(response.data.file)
      .then(res => res.text())
      .then(v => Papa.parse(v));
    return parseCSV;
  }

  return response.data;
};
