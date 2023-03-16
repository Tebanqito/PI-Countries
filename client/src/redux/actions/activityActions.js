import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createActivity = createAsyncThunk(
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
