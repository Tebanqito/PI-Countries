import axios from "axios";
import {
    GET_COUNTRIES,
    CLEAN_COUNTRIES,
    GET_COUNTRY_DETAIL,
    GET_ACTIVITIES,
    GET_COUNTRIES_ACTIVITY,
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
} from "./actionCases";

export const getCountries = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/countries")
      .then((res) => dispatch({ type: GET_COUNTRIES, payload: res.data }));
  };
};

export const findAllCountriesByContinent = (continent) => {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/countries/countriesByContinent?nameContinent=${continent}`
      )
      .then((res) =>
        dispatch({ type: FIND_ALL_COUNTRIES_BY_CONTINENT, payload: res.data })
      );
  };
};

export const findAllCountriesBySubRegion = (subRegion) => {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/countries/countriesBySubRegion?nameSubRegion=${subRegion}`
      )
      .then((res) =>
        dispatch({ type: FIND_ALL_COUNTRIES_BY_SUBREGION, payload: res.data })
      );
  };
};

export const findAllCountriesWhitPopulationGreaterThanOrEqual = (
  population
) => {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/countries/countriesWhitPopulationGreaterThanOrEqual?population=${population}`
      )
      .then((res) =>
        dispatch({
          type: FIND_ALL_COUNTRIES_WHIT_POPULATION_GREATER_THAN_OR_EQUAL,
          payload: res.data,
        })
      );
  };
};

export const findAllCountriesWhitPopulationLessThanOrEqual = (population) => {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/countries/countriesWhitPopulationLessThanOrEqual?population=${population}`
      )
      .then((res) =>
        dispatch({
          type: FIND_ALL_COUNTRIES_WHIT_POPULATION_LESS_THAN_OR_EQUAL,
          payload: res.data,
        })
      );
  };
};

export const findAllCountriesWhitPopulationBetween = (
  lessPopulation,
  greatPopulation
) => {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/countries/countriesWhitPopulationBetween?lessPopulation=${lessPopulation}&greatPopulation=${greatPopulation}`
      )
      .then((res) =>
        dispatch({
          type: FIND_ALL_COUNTRIES_WHIT_POPULATION_BETWEEN,
          payload: res.data,
        })
      );
  };
};

export const findAllCountriesByActivityName = (activityName) => {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/countries/countriesByActivityName?nameActivity=${activityName}`
      )
      .then((res) =>
        dispatch({
          type: FIND_ALL_COUNTRIES_BY_ACTIVITY_NAME,
          payload: res.data,
        })
      );
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
    .then((data) => dispatch({ type: GET_COUNTRY_DETAIL, payload: data.data }))
    .catch((error) => console.log(error));
};

export const getActivities = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/activities/getActivities")
      .then((data) => dispatch({ type: GET_ACTIVITIES, payload: data.data }));
  };
};

export const getCountriesActivities = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/countriesActivity/${id}`)
      .then((data) =>
        dispatch({ type: GET_COUNTRIES_ACTIVITY, payload: data.data })
      );
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