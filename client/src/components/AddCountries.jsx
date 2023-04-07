import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
    getCountriesWithoutActivityId,
    getCountriesByContinent,
    getCountryByName,
} from "../redux/actions/countriesActions";
import { linkCountry } from "../redux/actions/activityActions";
import Countries from "./Countries";

const AddCountries = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { activityId } = useParams();
    const [renderAddCountries, setRenderAddCountries] = useState(false);
    const country = useSelector((state) => state.countries.detail);
    const countries = useSelector((state) => state.countries.list);
    const [renderCountry, setRenderCountry] = useState(false);
    const [filters, setFilters] = useState({
        continent: "",
        name: "",
    });

    const handleInputChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const hanldeFindByName = () => {
        if (filters.name) {
            dispatch(getCountryByName(filters.name));
            setRenderCountry(true);
            setFilters({
                ...filters,
                name: "",
            });
        }
    };

    useEffect(() => {
        dispatch(getCountriesWithoutActivityId(activityId));
    }, [renderAddCountries]);

    return (
        <>
            <h1>Countries</h1>
            <button onClick={() => navigate(`/dashboard`)}>Back</button>

            <button onClick={() => dispatch(getCountriesWithoutActivityId(activityId))}>Get All Countries</button>

            <label htmlFor="">Filter by continent</label>
            <input type="text" name="continent" value={filters.continent} onChange={handleInputChange} />
            <button onClick={() => dispatch(getCountriesByContinent(filters.continent))}>Find</button>

            <label htmlFor="">Filter by name</label>
            <input type="text" name="name" value={filters.name} onChange={handleInputChange} />
            <button onClick={hanldeFindByName} >Find</button>

            {country && renderCountry && (
                <div>
                    <button onClick={() => setRenderCountry(false)} >Hide country</button>
                    <h2>Country:</h2>
                    <button onClick={() => dispatch(linkCountry({ countryId: country?.id, activityId: activityId }))} >Link</button>
                    <p>Name: {country?.name}</p>
                    <p>Continent: {country?.continent}</p>
                    <img src={country?.imgFlag} />
                </div>
            )}

            {countries.length && <Countries countries={countries} activityId={activityId} adminlinkCountry={true} setRenderAddCountries={setRenderAddCountries} renderAddCountries={renderAddCountries} />}
        </>
    );
};

export default AddCountries;