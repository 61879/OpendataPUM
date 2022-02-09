import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://otwartedane.erzeszow.pl/v1/datasets/',
});

export const httpResourcesClient = axios.create({
  baseURL: 'https://otwartedane.erzeszow.pl/v1/resources/',
});
