import {httpClient} from '../clients/httpClient';
import Papa from 'papaparse';

export const getDatasetById = async ({id}: {id: string}) => {
  const response = await httpClient.get(`${id}/resources/?format=json`);

  let link;

  switch (id) {
    case '52': {
      link = response.data[1].file;
      break;
    }
    default: {
      link = response.data[0].file;
    }
  }
  if (response.data) {
    const parseCSV = fetch(link)
      .then(res => res.text())
      .then(v => Papa.parse(v));
    return parseCSV;
  }
  return response.data;
};
