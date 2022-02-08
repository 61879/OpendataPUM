import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://otwartedane.erzeszow.pl/v1/datasets/',
});
