import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/actions/countriesActions";
import Filter from "./Filter";
import Countries from "./Countries";
import { HomeContainer } from "../styles/styles";

  const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.list);
  const [isAllCountries, setIsAllCountries] = useState(true);

  useEffect(() => {
    if (isAllCountries) {
      dispatch(getCountries());
      setIsAllCountries(false);
    }
  }, []);

  return (
    <HomeContainer>
      <Filter />
      {countries.length && (
        <Countries
          countries={countries}
          toGetAllCountries={setIsAllCountries}
        />
      )}
    </HomeContainer>
  );
};

export default Home;