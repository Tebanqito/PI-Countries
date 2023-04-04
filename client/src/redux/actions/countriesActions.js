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
    const response = await axios.get(
      `http://localhost:3001/countries?name=${name}`
    );
    return response.data;
  }
);

export const getCountriesByNameAsc = createAsyncThunk(
  "countries/getCountriesByNameAsc",
  async () => {
    return (countries) => {
      return countries.sort((c1, c2) => {
        if (c1.name < c2.name) return -1;
        else if (c1.name > c2.name) return 1;
        else return 0;
      });
    };
  }
);

export const getCountriesByNameDesc = createAsyncThunk(
  "countries/getCountriesByNameDesc",
  async () => {
    return (countries) => {
      return countries.sort((c1, c2) => {
        if (c1.name > c2.name) return -1;
        else if (c1.name < c2.name) return 1;
        else return 0;
      });
    };
  }
);

export const getCountriesByPopulationAsc = createAsyncThunk(
  "countries/getCountriesByPopulationAsc",
  async () => {
    return (countries) => {
      return countries.sort((c1, c2) => {
        if (c1.poblacion < c2.poblacion) return -1;
        else if (c1.poblacion > c2.poblacion) return 1;
        else return 0;
      });
    };
  }
);

export const getCountriesByPopulationDesc = createAsyncThunk(
  "countries/getCountriesByPopulationDesc",
  async () => {
    return (countries) => {
      return countries.sort((c1, c2) => {
        if (c1.poblacion > c2.poblacion) return -1;
        else if (c1.poblacion < c2.poblacion) return 1;
        else return 0;
      });
    };
  }
);

export const getCountriesWithoutActivityId = createAsyncThunk(
  "countries/getCountriesWithoutActivity",
  async (activityId) => {
    const response = await axios.get(
      `http://localhost:3001/countries/countriesWithoutActivity/${activityId}`
    );
    return response.data;
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
  async (populations) => populations
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