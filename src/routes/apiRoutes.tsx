import { fetchUrl } from "../utils/apiConfig";

export const covidAllApi = fetchUrl("v3/covid-19/all");
export const covidCountriesApi = fetchUrl("v3/covid-19/countries");
export const covidhistoricalApi = fetchUrl("v3/covid-19/historical/all");
