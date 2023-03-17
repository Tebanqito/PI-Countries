import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async () => {
    const response = await axios.get(`http://localhost:3001/countries`);
    return response.data;
  }
);

export const getCountryById = createAsyncThunk(
  "countries/getCountryById",
  async (id) => {
    const response = await axios.get(`http://localhost:3001/countries/${id}`);
    return response.data;
  }
);

export const getCountryByName = createAsyncThunk(
  "countries/getCountryByName",
  async (name) => {
    return name;
  }
);

export const getCountriesByContinent = createAsyncThunk(
  "countries/getCountriesByContinent",
  async (continent) => {
    return continent;
  }
);

export const getCountriesBySubRegion = createAsyncThunk(
  "countries/getCountriesBySubRegion",
  async (subRegion) => {
    return subRegion;
  }
);

export const getCountriesWhitPopulationGreaterThanOrEqual = createAsyncThunk(
  "countries/getCountriesWhitPopulationGreaterThanOrEqual",
  async (population) => {
    return population;
  }
);

export const getCountriesWhitPopulationLessThanOrEqual = createAsyncThunk(
  "countries/getCountriesWhitPopulationLessThanOrEqual",
  async (population) => {
    return population;
  }
);

export const getCountriesWhitPopulationBetween = createAsyncThunk(
  "countries/getCountriesWhitPopulationBetween",
  async (lessPopulation, greatPopulation) => {
    return { less: lessPopulation, great: greatPopulation };
  }
);

export const getCountriesByActivityName = createAsyncThunk(
  "countries/getCountriesByActivityName",
  async (activityName) => {
    const response = await axios.get(
      `http://localhost:3001/countries/countriesByActivityName?name=${activityName}`
    );
    return response.data;
  }
);

export const getCountriesByActivityId = createAsyncThunk(
  "countries/getCountriesByActivityId",
  async (id) => {
    const response = await axios.get(
      `http://localhost:3001/countries/countriesByActivityId/${id}`
    );
    return response.data;
  }
);