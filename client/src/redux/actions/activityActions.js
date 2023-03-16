import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createActivity = createAsyncThunk(
  "activity/create",
  async (data) => {
    const response = await axios.post(`http://localhost:3001/activities`, data);
    return response.data;
  }
);