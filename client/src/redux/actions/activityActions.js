import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addActivity = createAsyncThunk(
  "activities/create",
  async (data) => {
    const response = await axios.post(`http://localhost:3001/activities`, data);
    return response.data;
  }
);

export const getActivities = createAsyncThunk(
  "activities/getActivities",
  async () => {
    const response = await axios.get(`http://localhost:3001/activities`);
    return response.data;
  }
);

export const getActivityById = createAsyncThunk(
  "activities/getActivityById",
  async (id) => {
    const response = await axios.get(`http://localhost:3001/activities/${id}`);
    return response.data;
  }
);

export const getActivitiesByDifficulty = createAsyncThunk(
  "activities/getActivitiesByDifficulty",
  async (difficlty) => {
    const response = await axios.get(
      `http://localhost:3001/activities/getActivitiesByDifficulty?difficlty=${difficlty}`
    );
    return response.data;
  }
);

export const getActivitiesBySeason = createAsyncThunk(
  "activities/getActivitiesBySeason",
  async (season) => {
    const response = await axios.get(
      `http://localhost:3001/activities/getActivitiesBySeason?season=${season}`
    );
    return response.data;
  }
);

export const getActivitiesByName = createAsyncThunk(
  "activities/getActivitiesByName",
  async (name) => {
    const response = await axios.get(
      `http://localhost:3001/activities/getActivitiesByName?name=${name}`
    );
    return response.data;
  }
);

export const getActivitiesByCountryName = createAsyncThunk(
  "activities/getActivitiesByCountryName",
  async (countryName) => {
    const response = await axios.get(
      `http://localhost:3001/activities/getActivitiesByCountryName?countryName=${countryName}`
    );
    return response.data;
  }
);

export const getActivitiesByCountryId = createAsyncThunk(
  "activities/getActivitiesByCountryId",
  async (countryId) => {
    const response = await axios.get(
      `http://localhost:3001/activities/getActivitiesByCountryId/${countryId}`
    );
    return response.data;
  }
);

export const updateActivityById = createAsyncThunk(
  "activities/updateActivityById",
  async (activityId, attributes) => {
    const response = await axios.put(
      `http://localhost:3001/activities/update/${activityId}`, attributes
    );
    return response.data;
  }
);

export const deleteActivityById = createAsyncThunk(
  "activities/deleteActivityById",
  async (activityId) => {
    const response = await axios.delete(
      `http://localhost:3001/activities/delete/${activityId}`
    );
    return response.data;
  }
);

export const unlinkCountry = createAsyncThunk(
  "activities/unlinkCountry",
  async (data) => {
    const response = await axios.put(
      `http://localhost:3001/activities/unlinkCountry`, data
    );
    return response.data;
  }
);