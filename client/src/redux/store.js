// import { createStore, applyMiddleware, compose } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { reducer } from "./reducer";

// const composeEnahncer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     reducer,
//     composeEnahncer(applyMiddleware(thunkMiddleware))
// );
import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./reducers/countriesReducer";
import activityReducer from "./reducers/activityReducer";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    activities: activityReducer,
  },
});

export default store;
