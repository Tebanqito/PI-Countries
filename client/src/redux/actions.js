import axios from "axios";
import {
  GET_COUNTRIES,
  CLEAN_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_ACTIVITIES,
  ADD_ACTIVITY,
  GET_ACTIVITIES_BY_COUNTRY_ID,
  GET_ACTIVITIES_BY_COUNTRY_NAME,
  GET_ACTIVITIES_BY_DIFFICULTY,
  GET_ACTIVITIES_BY_SEASON,
  GET_ACTIVITY_BY_NAME,
  FIND_ALL_COUNTRIES_BY_ACTIVITY_ID,
  FIND_ALL_COUNTRIES_BY_ACTIVITY_NAME,
  FIND_ALL_COUNTRIES_BY_CONTINENT,
  FIND_ALL_COUNTRIES_BY_SUBREGION,
  FIND_ALL_COUNTRIES_WHIT_POPULATION_BETWEEN,
  FIND_ALL_COUNTRIES_WHIT_POPULATION_GREATER_THAN_OR_EQUAL,
  FIND_ALL_COUNTRIES_WHIT_POPULATION_LESS_THAN_OR_EQUAL,
  UPDATE_ACTIVITY_BY_ID,
  DELETE_ACTIVITY_BY_ID,
} from "./actionCases";

export const getCountries = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/countries")
      .then((res) => dispatch({ type: GET_COUNTRIES, payload: res.data }));
  };
};

export const findAllCountriesByContinent = (continent) => {
  return { type: FIND_ALL_COUNTRIES_BY_CONTINENT, payload: continent };
};

export const findAllCountriesBySubRegion = (subRegion) => {
  return { type: FIND_ALL_COUNTRIES_BY_SUBREGION, payload: subRegion };
};

export const findAllCountriesWhitPopulationGreaterThanOrEqual = (
  population
) => {
  return {
    type: FIND_ALL_COUNTRIES_WHIT_POPULATION_GREATER_THAN_OR_EQUAL,
    payload: population,
  };
};

export const findAllCountriesWhitPopulationLessThanOrEqual = (population) => {
  return {
    type: FIND_ALL_COUNTRIES_WHIT_POPULATION_LESS_THAN_OR_EQUAL,
    payload: population,
  };
};

export const findAllCountriesWhitPopulationBetween = (
  lessPopulation,
  greatPopulation
) => {
  return {
    type: FIND_ALL_COUNTRIES_WHIT_POPULATION_BETWEEN,
    payload: { less: lessPopulation, great: greatPopulation },
  };
};

export const findAllCountriesByActivityName = (activityName) => {
  return {
    type: FIND_ALL_COUNTRIES_BY_ACTIVITY_NAME,
    payload: activityName,
  };
};

export const findAllCountriesByActivityId = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/countries/countriesByActivityId/${id}`)
      .then((res) =>
        dispatch({
          type: FIND_ALL_COUNTRIES_BY_ACTIVITY_ID,
          payload: res.data,
        })
      );
  };
};

export const cleanCountries = () => {
  return { type: CLEAN_COUNTRIES };
};

export const getCountryDetail = (id) => (dispatch) => {
  return axios
    .get(`http://localhost:3001/countries/${id}`)
    .then((data) => dispatch({ type: GET_COUNTRY_DETAIL, payload: data.data }));
};

export const getActivities = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/activities/getActivities")
      .then((data) => dispatch({ type: GET_ACTIVITIES, payload: data.data }));
  };
};

export const addActivity = (
  countriesId,
  name,
  difficulty,
  duration,
  season
) => {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/activities", {
        countriesId,
        name,
        difficulty,
        duration,
        season,
      });
      console.log("actividad agregada");
      return dispatch({
        type: ADD_ACTIVITY,
        payload: {
          countriesId,
          name,
          difficulty,
          duration,
          season,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getActivitiesByDifficulty = (difficulty) => {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/activities/getActivitiesByDifficulty?difficulty=${difficulty}`
      )
      .then((res) =>
        dispatch({ type: GET_ACTIVITIES_BY_DIFFICULTY, payload: res.data })
      );
  };
};

export const getActivitiesBySeason = (season) => {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/activities/getActivitiesBySeason?season=${season}`
      )
      .then((res) =>
        dispatch({ type: GET_ACTIVITIES_BY_SEASON, payload: res.data })
      );
  };
};

export const getActivitiesByName = (name) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/activities/getActivityByName?name=${name}`)
      .then((res) =>
        dispatch({ type: GET_ACTIVITY_BY_NAME, payload: res.data })
      );
  };
};

export const getActivitiesByCountryName = (name) => {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/activities/getActivitiesByCountryName?countryName=${name}`
      )
      .then((res) =>
        dispatch({ type: GET_ACTIVITIES_BY_COUNTRY_NAME, payload: res.data })
      );
  };
};

export const getActivitiesByCountryId = (countryId) => {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/activities/getActivitiesByCountryId/${countryId}`
      )
      .then((res) =>
        dispatch({ type: GET_ACTIVITIES_BY_COUNTRY_ID, payload: res.data })
      );
  };
};

export const updateActivityById = (id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:3001/activities/update/${id}`)
      .then((res) =>
        dispatch({ type: UPDATE_ACTIVITY_BY_ID, payload: res.data })
      );
  };
};

export const deleteActivityById = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3001/activities/delete/${id}`)
      .then((res) =>
        dispatch({ type: DELETE_ACTIVITY_BY_ID, payload: res.data })
      );
  };
};
