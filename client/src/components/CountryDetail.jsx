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
    HomeLink,
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
                <HomeLink href="/home">HOME</HomeLink>
                <h1>Country Detail</h1>
                <CardTitle><b>ID</b>: {country.id}</CardTitle>
                <CardTitle><b>NOMBRE</b>: {country.name}</CardTitle>
                <CardTitle><b>CAPITAL</b>: {country.capital}</CardTitle>
                <CardTitle><b>SUBREGION</b>: {country.subRegion ? country.subRegion : "No posee subregion"}</CardTitle>
                <CardTitle><b>AREA</b>: {country.area}</CardTitle>
                <CardTitle><b>POBLACION</b>: {country.poblacion}</CardTitle>
                <Fondo>
                <CardLabel><b>ACTIVIDADES TURISTICAS</b>:</CardLabel>
                {country.Activities.length ? <CardList>
                    {country.Activities.map(a => {
                        return (<li key={a.id}>
                            <CardTitle><b>NOMBRE</b>:{a.name}</CardTitle>
                            <CardTitle><b>DIFICULTAD</b>:{a.difficulty}</CardTitle>
                            <CardTitle><b>DURACION</b>:{a.duration}</CardTitle>
                            <CardTitle><b>TEMPORADA</b>:{a.season}</CardTitle>
                            <hr/>
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