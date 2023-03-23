import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCountries,
  getCountriesByContinent,
  getCountriesByNameAsc,
  getCountriesByNameDesc,
  getCountriesByPopulationAsc,
  getCountriesByPopulationDesc,
  getCountriesByActivityName,
  getCountriesBySubRegion,
  getCountriesWhitPopulationBetween,
  getCountriesWhitPopulationGreaterThanOrEqual,
  getCountriesWhitPopulationLessThanOrEqual,
  getCountryByName,
} from "../redux/actions/countriesActions";
import {
  FilterSearchButton,
  FilterContainer,
  FilterContinentSelect,
  FilterLabel,
  StartButton,
} from "../styles/styles";

const Filter = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const country = useSelector((state) => state.countries.detail);
  const [isAllContinent, setIsAllContinent] = useState("All");
  const [input, setInput] = useState({
    countryName: "",
    countrySubRegion: "",
    activityName: "",
    lessPopulation: 0,
    greatPopulation: 0,
    min: 0,
    max: 0,
  });

  const handelSelectContinent = (e) => {
    if (e.target.value === "All") {
      setIsAllContinent("All");
      dispatch(getCountries());
    } else {
      setIsAllContinent(e.target.value);
      dispatch(getCountriesByContinent(e.target.value));
    }
  };

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickCountryByName = () => {
    dispatch(getCountryByName(input.countryName));
    navigate(`/country/${country.id}`);
  };

  return (
    <FilterContainer>
      <StartButton onClick={() => navigate("/")}>HOMEPAGE</StartButton>
      <FilterLabel htmlFor="">Continents</FilterLabel>
      <FilterContinentSelect
        name="continentes"
        id="continents"
        onChange={handelSelectContinent}
        multiple
      >
        <option value="All">All continents</option>
        {(isAllContinent === "Americas" || isAllContinent === "All") && (
          <option value="Americas">America</option>
        )}
        {(isAllContinent === "Europe" || isAllContinent === "All") && (
          <option value="Europe">Europa</option>
        )}
        {(isAllContinent === "Asia" || isAllContinent === "All") && (
          <option value="Asia">Asia</option>
        )}
        {(isAllContinent === "Africa" || isAllContinent === "All") && (
          <option value="Africa">Africa</option>
        )}
        {(isAllContinent === "Antarctic" || isAllContinent === "All") && (
          <option value="Antarctic">Antartida</option>
        )}
        {(isAllContinent === "Oceania" || isAllContinent === "All") && (
          <option value="Oceania">Oceania</option>
        )}
      </FilterContinentSelect>

      <FilterSearchButton onClick={() => dispatch(getCountriesByNameAsc())}>Sort by country name ascending</FilterSearchButton>
      <FilterSearchButton onClick={() => dispatch(getCountriesByNameDesc())}>Sort by country name descendingly</FilterSearchButton>
      <FilterSearchButton onClick={() => dispatch(getCountriesByPopulationAsc())}>Sort by population ascending</FilterSearchButton>
      <FilterSearchButton onClick={() => dispatch(getCountriesByPopulationDesc())}>Sort by population descendingly</FilterSearchButton>

      <FilterLabel htmlFor="">Filter by subregion</FilterLabel>
      <input value={input.countrySubRegion} type="text" name="countrySubRegion" onChange={handleInputChange} />
      <FilterSearchButton onClick={() => dispatch(getCountriesBySubRegion(input.countrySubRegion))}>Find</FilterSearchButton>

      <FilterLabel htmlFor="">Filter by name</FilterLabel>
      <input value={input.countryName} type="text" name="countryName" onChange={handleInputChange} />
      <FilterSearchButton onClick={handleClickCountryByName}>Find</FilterSearchButton>

      <FilterLabel htmlFor="">Filter by activity name</FilterLabel>
      <input value={input.activityName} type="text" name="activityName" onChange={handleInputChange} />
      <FilterSearchButton onClick={() => dispatch(getCountriesByActivityName(input.activityName))}>Find</FilterSearchButton>

      <FilterLabel htmlFor="">Filter countries whit population less</FilterLabel>
      <input value={input.lessPopulation} type="number" name="lessPopulation" onChange={handleInputChange} />
      <FilterSearchButton onClick={() => dispatch(getCountriesWhitPopulationLessThanOrEqual(input.lessPopulation))}>Find</FilterSearchButton>

      <FilterLabel htmlFor="">Filter countries whit population great</FilterLabel>
      <input value={input.greatPopulation} type="number" name="greatPopulation" onChange={handleInputChange} />
      <FilterSearchButton onClick={() => dispatch(getCountriesWhitPopulationGreaterThanOrEqual(input.greatPopulation))}>Find</FilterSearchButton>

      <FilterLabel htmlFor="">Filter countries whit population between</FilterLabel>
      <p>Min Population</p>
      <input value={input.min} type="number" name="min" onChange={handleInputChange} />
      <p>Max Population</p>
      <input value={input.max} type="number" name="max" onChange={handleInputChange} />
      <FilterSearchButton onClick={() => dispatch(getCountriesWhitPopulationBetween({ less: input.min, great: input.max }))}>Find</FilterSearchButton>
    </FilterContainer>
  );
}

export default Filter;