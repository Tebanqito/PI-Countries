import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCountries,
  getCountriesByContinent,
  getCountriesByNameAsc,
  getCountriesByNameDesc,
} from "../redux/actions/countriesActions";
import { BackgroundFilter } from "../styles/styles";

export default function Filter(props) {
  const dispatch = useDispatch();
  const [isAllContinent, setIsAllContinent] = useState("All");

  const handelSelectContinent = (e) => {
    if (e.target.value === "All") {
      setIsAllContinent("All");
      dispatch(getCountries());
    } else {
      setIsAllContinent(e.target.value);
      dispatch(getCountriesByContinent(e.target.value));
    }
  };

  const handleOrderAsc = () => {
    dispatch(getCountriesByNameAsc());
  };

  const handleOrderDesc = () => {
    dispatch(getCountriesByNameDesc());
  };

  return (
    <BackgroundFilter>
      <label htmlFor="">Continentes</label>
      <select
        name="continentes"
        id="continents"
        onChange={handelSelectContinent}
        multiple
      >
        <option value="All">Todos los continentes</option>
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

      <button onClick={handleOrderAsc}>
        Ordenar por nombre de pais ascendentemente
      </button>
      <button onClick={handleOrderDesc}>
        Ordenar por nombre de pais descendentemente
      </button>
    </BackgroundFilter>
  );
}