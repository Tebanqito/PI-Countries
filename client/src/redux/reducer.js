import {
    GET_COUNTRIES,
    CLEAN_COUNTRIES,
    GET_COUNTRY_DETAIL,
    GET_ACTIVITIES,
    GET_COUNTRIES_ACTIVITY,
    ADD_ACTIVITY
} from "./actions";

const initialState = {
    countries: [],
    countryDetail: [],
    countriesActivities: [],
    activities: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };
        case CLEAN_COUNTRIES:
            return {
                ...state,
                countries: []
            };
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: [action.payload]
            };
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };
        case GET_COUNTRIES_ACTIVITY:
            return {
                ...state,
                countriesActivities: action.payload
            };
        case ADD_ACTIVITY:
            return {
                ...state,
                activities: [ ...state.activities, action.payload ]
            }
        default:
            return { ...state };
    }
};