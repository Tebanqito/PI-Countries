import { createSlice } from "@reduxjs/toolkit";
import {
  getCountries,
  getCountryById,
  getCountriesByContinent,
  getCountriesBySubRegion,
  getCountriesByActivityId,
  getCountriesByActivityName,
  getCountriesWhitPopulationBetween,
  getCountriesWhitPopulationGreaterThanOrEqual,
  getCountriesWhitPopulationLessThanOrEqual,
} from "../actions/countriesActions";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    detail: {},
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCountryById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountryById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(getCountryById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCountriesByContinent.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountriesByContinent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = state.list.filter((c) => c.continent === action.payload);
      })
      .addCase(getCountriesByContinent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCountriesBySubRegion.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountriesBySubRegion.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = state.list.filter((c) => c.subRegion === action.payload);
      })
      .addCase(getCountriesBySubRegion.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCountriesWhitPopulationBetween.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountriesWhitPopulationBetween.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = state.list.filter(
          (c) =>
            c.poblacion >= action.payload.less &&
            c.poblacion <= action.payload.great
        );
      })
      .addCase(getCountriesWhitPopulationBetween.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(
        getCountriesWhitPopulationGreaterThanOrEqual.pending,
        (state, action) => {
          state.status = "loading";
        }
      )
      .addCase(
        getCountriesWhitPopulationGreaterThanOrEqual.fulfilled,
        (state, action) => {
          state.status = "succeeded";
          state.list = state.list.filter((c) => c.poblacion >= action.payload);
        }
      )
      .addCase(
        getCountriesWhitPopulationGreaterThanOrEqual.rejected,
        (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        }
      )
      .addCase(
        getCountriesWhitPopulationLessThanOrEqual.pending,
        (state, action) => {
          state.status = "loading";
        }
      )
      .addCase(
        getCountriesWhitPopulationLessThanOrEqual.fulfilled,
        (state, action) => {
          state.status = "succeeded";
          state.list = state.list.filter((c) => c.poblacion <= action.payload);
        }
      )
      .addCase(
        getCountriesWhitPopulationLessThanOrEqual.rejected,
        (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        }
      )
      .addCase(getCountriesByActivityId.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountriesByActivityId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getCountriesByActivityId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCountriesByActivityName.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountriesByActivityName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getCountriesByActivityName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default countriesSlice.reducer;