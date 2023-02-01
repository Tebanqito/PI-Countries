import axios from "axios";
export const GET_COUNTRIES = "GET COUNTRIES";
export const CLEAN_COUNTRIES = "CLEAN COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET COUNTRY DETAIL";
export const GET_ACTIVITIES = "GET ACTIVITIES";
export const GET_COUNTRIES_ACTIVITY = "GET COUNTRIES AVTIVITY";
export const ADD_ACTIVITY = "ADD ACTIVITY";

export const getCountries = () => {
    return function (dispatch) {
        axios.get("http://localhost:3001/countries")
            .then(data => dispatch({ type: GET_COUNTRIES, payload: data.data }));
    };
};

export const cleanCountries = () => {
    return { type: CLEAN_COUNTRIES };
};

export const getCountryDetail = (id) => (dispatch) => {
    return axios.get(`http://localhost:3001/countries/${id}`)
        .then(data => dispatch({ type: GET_COUNTRY_DETAIL, payload: data.data }))
        .catch(error => console.log(error));
};

export const getActivities = () => {
    return function (dispatch) {
        axios.get("http://localhost:3001/activities/getActivities")
            .then(data => dispatch({ type: GET_ACTIVITIES, payload: data.data }));
    };
};

export const getCountriesActivities = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/countriesActivity/${id}`)
            .then(data => dispatch({ type: GET_COUNTRIES_ACTIVITY, payload: data.data }));
    };
};

export const addActivity = (countriesId, name, difficulty, duration, season) => {
    return async function (dispatch) {
        try {
            await axios.post("http://localhost:3001/activities", { countriesId, name, difficulty, duration, season });
            console.log('actividad agregada');
            return dispatch({
                type: ADD_ACTIVITY,
                payload: {
                    countriesId,
                    name,
                    difficulty,
                    duration,
                    season
                }
            });
        } catch (error) {
            console.log(error.message);
        }
    };
};