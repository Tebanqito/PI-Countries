import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/actions/countriesActions";
import Filter from "./Filter";
import Countries from "./Countries";
import { HomeContainer } from "../styles/styles";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.list);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <HomeContainer>
      <Filter />
      {countries.length && (
        <Countries
          countries={countries}
        />
      )}
    </HomeContainer>
  );
};

export default Home;