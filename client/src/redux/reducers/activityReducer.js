import { createSlice } from "@reduxjs/toolkit";
import {
  addActivity,
  getActivities,
  getActivitiesByCountryId,
  getActivitiesByCountryName,
  getActivitiesByDifficulty,
  getActivitiesByName,
  getActivitiesBySeason,
  getActivityById,
  unlinkCountry,
  linkCountry,
} from "../actions/activityActions";

const activitySlice = createSlice({
  name: "activities",
  initialState: {
    detail: {},
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addActivity.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addActivity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(addActivity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getActivities.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getActivities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getActivityById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getActivityById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(getActivityById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getActivitiesByCountryId.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getActivitiesByCountryId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getActivitiesByCountryId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getActivitiesByCountryName.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getActivitiesByCountryName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getActivitiesByCountryName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getActivitiesByDifficulty.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getActivitiesByDifficulty.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getActivitiesByDifficulty.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getActivitiesByName.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getActivitiesByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getActivitiesByName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getActivitiesBySeason.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getActivitiesBySeason.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getActivitiesBySeason.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(unlinkCountry.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(unlinkCountry.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(unlinkCountry.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(linkCountry.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(linkCountry.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(linkCountry.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default activitySlice.reducer;