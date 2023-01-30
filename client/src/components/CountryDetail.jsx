import { getCountries, cleanCountries, getCountryDetail } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
    CardDetailCotainer,
    CardTitle,
    CardImage,
    CardLabel,
    CardList,
    Fondo,
    ListItemFondo
} from "../styles/styles"

const CountryDetail = (props) => {
    const dispatch = useDispatch();
    const { countryId } = useParams();

    useEffect(() => {
        dispatch(getCountries());
        // dispatch(getCountryDetail(countryId));
        return () => {
            //dispatch(cleanCountries());
        }
    }, []);

    // const country = useSelector(state => state.countryDetail);
    // console.log(country);

    const countries = useSelector(state => { return state.countries });
    const country = countries.filter(c => c.id == countryId)[0];

    return (
        <Fondo>
            <CardDetailCotainer>
                <Link to="/home">HOME</Link>
                <h1>Country Detail</h1>
                <CardTitle>ID: {country.id}</CardTitle>
                <CardTitle>NOMBRE: {country.name}</CardTitle>
                <CardTitle>CAPITAL: {country.capital}</CardTitle>
                <CardTitle>SUBREGION: {country.subRegion ? country.subRegion : "No posee subregion"}</CardTitle>
                <CardTitle>AREA: {country.area}</CardTitle>
                <CardTitle>POBLACION: {country.poblacion}</CardTitle>
                <Fondo>
                <CardLabel>ACTIVIDADES TURISTICAS:</CardLabel>
                {country.Activities.length ? <CardList>
                    {country.Activities.map(a => {
                        return (<li key={a.id}>
                            <CardTitle>{a.name}</CardTitle>
                            <CardTitle>{a.difficulty}</CardTitle>
                            <CardTitle>{a.duration}</CardTitle>
                            <CardTitle>{a.season}</CardTitle>
                        </li>);
                    })}
                </CardList> : "No posee actividades turisticas"}
                </Fondo>
                <CardImage src={country.imgFlag} alt={`Flag of ${country.name}`} />
            </CardDetailCotainer>
        </Fondo>
    );
};

export default CountryDetail;