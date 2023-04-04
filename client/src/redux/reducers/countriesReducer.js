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
  getCountryByName,
  getCountriesByNameAsc,
  getCountriesByNameDesc,
  getCountriesByPopulationAsc,
  getCountriesByPopulationDesc,
  getCountriesWithoutActivityId,
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
        state.list = state.list.filter((c) =>
          c.continent.toLowerCase().includes(action.payload.toLowerCase())
        );
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
        state.list = state.list.filter((c) =>
          String(c.subRegion)
            .toLowerCase()
            .includes(String(action.payload).toLowerCase())
        );
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
      })
      .addCase(getCountryByName.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountryByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(getCountryByName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCountriesByNameAsc.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountriesByNameAsc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload(state.list);
      })
      .addCase(getCountriesByNameAsc.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCountriesByNameDesc.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountriesByNameDesc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload(state.list);
      })
      .addCase(getCountriesByNameDesc.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCountriesByPopulationAsc.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountriesByPopulationAsc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload(state.list);
      })
      .addCase(getCountriesByPopulationAsc.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCountriesByPopulationDesc.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountriesByPopulationDesc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload(state.list);
      })
      .addCase(getCountriesByPopulationDesc.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCountriesWithoutActivityId.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCountriesWithoutActivityId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getCountriesWithoutActivityId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default countriesSlice.reducer;