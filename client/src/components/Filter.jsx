import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCountries,
  getCountriesByContinent,
  getCountriesByNameAsc,
  getCountriesByNameDesc,
  getCountriesByActivityName,
  getCountriesBySubRegion,
  getCountriesWhitPopulationBetween,
  getCountriesWhitPopulationGreaterThanOrEqual,
  getCountriesWhitPopulationLessThanOrEqual,
  getCountryByName,
} from "../redux/actions/countriesActions";
import { BackgroundFilter } from "../styles/styles";

export default function Filter(props) {
  const dispatch = useDispatch();
  const [isAllContinent, setIsAllContinent] = useState("All");
  const [input, setInput] = useState({
    countryName: "",
    countrySubRegion: "",
    lessPopulation: 0,
    greatPopulation: 0,
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

  return (
    <BackgroundFilter>
      <label htmlFor="">Continents</label>
      <select
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
      </select>

      <button onClick={() => dispatch(getCountriesByNameAsc())}>Sort by country name ascending</button>
      <button onClick={() => dispatch(getCountriesByNameDesc())}>
        Sort by country name descendingly
      </button>

      <label htmlFor="">Filter by subregion</label>
      <input value={input.countrySubRegion} type="text" name="countrySubRegion" onChange={handleInputChange} />
      <button onClick={() => {
        console.log(input.countrySubRegion);
        dispatch(getCountriesBySubRegion(input.countrySubRegion));
      }}>Find</button>

      {/* <label htmlFor="">Filter by name</label>
      <input value={input.countryName} type="text" name="countryName" onChange={handleInputChange} />
      <button onClick={() => dispatch(getCountryByName(input.countryName))}>Find</button> */}
    </BackgroundFilter>
  );
}