import { getCountries, cleanCountries, getCountryDetail } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
        // dispatch(getCountries());
        dispatch(getCountryDetail(countryId));
        return () => {
            //dispatch(cleanCountries());
        }
    }, []);

    const country = useSelector(state => state.countryDetail);
    console.log(country);

    // const countries = useSelector(state => { return state.countries });
    // const country = countries.filter(c => c.id == countryId)[0];

    return (
        <Fondo>
            <CardDetailCotainer>
                <HomeLink href="/home">HOME</HomeLink>
                <h1>Country Detail</h1>
                <CardTitle><b>ID</b>: {country[0]?.id}</CardTitle>
                <CardTitle><b>NOMBRE</b>: {country[0]?.name}</CardTitle>
                <CardTitle><b>CAPITAL</b>: {country[0]?.capital}</CardTitle>
                <CardTitle><b>SUBREGION</b>: {country[0]?.subRegion ? country[0]?.subRegion : "No posee subregion"}</CardTitle>
                <CardTitle><b>AREA</b>: {country[0]?.area} Km2</CardTitle>
                <CardTitle><b>POBLACION</b>: {country[0]?.poblacion}</CardTitle>
                <Fondo>
                <CardLabel><b>ACTIVIDADES TURISTICAS</b>:</CardLabel>
                {country[0]?.Activities.length ? <CardList>
                    {country[0]?.Activities.map(a => {
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
                <CardImage src={country[0]?.imgFlag} alt={`Flag of ${country[0]?.name}`} />
            </CardDetailCotainer>
        </Fondo>
    );
};

export default CountryDetail;