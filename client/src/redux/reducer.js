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
  UPDATE_ACTIVITY_BY_ID,
  DELETE_ACTIVITY_BY_ID,
  FIND_ALL_COUNTRIES_BY_ACTIVITY_ID,
  FIND_ALL_COUNTRIES_BY_ACTIVITY_NAME,
  FIND_ALL_COUNTRIES_BY_CONTINENT,
  FIND_ALL_COUNTRIES_BY_SUBREGION,
  FIND_ALL_COUNTRIES_WHIT_POPULATION_BETWEEN,
  FIND_ALL_COUNTRIES_WHIT_POPULATION_GREATER_THAN_OR_EQUAL,
  FIND_ALL_COUNTRIES_WHIT_POPULATION_LESS_THAN_OR_EQUAL,
} from "./actionCases";

const initialState = {
  countries: [],
  countryDetail: {},
  activities: [],
  activityDetail: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case CLEAN_COUNTRIES:
      return {
        ...state,
        countries: [],
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };
    case FIND_ALL_COUNTRIES_BY_ACTIVITY_ID:
      return {
        ...state,
        countries: action.payload,
      };
    case FIND_ALL_COUNTRIES_BY_ACTIVITY_NAME:
      return {
        ...state,
        countries: state.countries.filter(
          (c) => c.Activity.name === action.payload
        ),
      };
    case FIND_ALL_COUNTRIES_BY_CONTINENT:
      return {
        ...state,
        countries: state.countries.filter(
          (c) => c.continent === action.payload
        ),
      };
    case FIND_ALL_COUNTRIES_BY_SUBREGION:
      return {
        ...state,
        countries: state.countries.filter(
          (c) => c.subRegion === action.payload
        ),
      };
    case FIND_ALL_COUNTRIES_WHIT_POPULATION_GREATER_THAN_OR_EQUAL:
      return {
        ...state,
        countries: state.countries.filter((c) => c.poblacion >= action.payload),
      };
    case FIND_ALL_COUNTRIES_WHIT_POPULATION_LESS_THAN_OR_EQUAL:
      return {
        ...state,
        countries: state.countries.filter((c) => c.poblacion <= action.payload),
      };
    case FIND_ALL_COUNTRIES_WHIT_POPULATION_BETWEEN:
      return {
        ...state,
        countries: state.countries.filter(
          (c) =>
            c.poblacion >= action.payload.less &&
            c.poblacion <= action.payload.great
        ),
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case GET_ACTIVITIES_BY_DIFFICULTY:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_ACTIVITIES_BY_SEASON:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_ACTIVITY_BY_NAME:
      return {
        ...state,
        activityDetail: action.payload,
      };
    case GET_ACTIVITIES_BY_COUNTRY_ID:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_ACTIVITIES_BY_COUNTRY_NAME:
      return {
        ...state,
        activities: action.payload,
      };
    case UPDATE_ACTIVITY_BY_ID:
      return {
        ...state,
        activityDetail: action.payload,
      };
    case DELETE_ACTIVITY_BY_ID:
      return {
        ...state,
        activityDetail: action.payload,
      };
    default:
      return { ...state };
  }
};