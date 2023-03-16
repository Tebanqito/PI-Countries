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
