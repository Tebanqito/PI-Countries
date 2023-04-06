import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
    getCountriesWithoutActivityId,
    getCountriesByContinent,
    getCountryByName,
} from "../redux/actions/countriesActions";
import { linkCountry } from "../redux/actions/activityActions";

const AddCountries = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { activityId } = useParams();
    const countries = useSelector((state) => state.countries.list);
    const [filters, setFilters] = useState({
        continent: "",
        name: "",
    });

    const handleInputChange = (e) => {
        setFilters({
            ...filters,
            [e.name]: e.target.value,
        });
    };

    useEffect(() => {
        activityId && dispatch(getCountriesWithoutActivityId(activityId));
    }, []);

    return (
        <>
            <h1>Countries</h1>
            <button onClick={() => navigate(`/activity/${activityId}`)}>Back</button>

            <button onClick={() => dispatch(getCountriesWithoutActivityId(activityId))}>Get All Countries</button>

            <label htmlFor="">Filter by continent</label>
            <input type="text" name="continent" value={filters.continent} onChange={handleInputChange} />
            <button onClick={() => dispatch(getCountriesByContinent(filters.continent))}>Find</button>

            <label htmlFor="">Filter by name</label>
            <input type="text" name="name" value={filters.name} onChange={handleInputChange} />
            <button onClick={(dispatch(getCountryByName(filters.name)))} >Find</button>

            {countries.length && countries.map((c) => (
                <div>
                    <button onClick={() => dispatch(linkCountry({ countryId: c?.id, activityId: activityId }))}>ADD</button>
                    <p>Name: {c?.name}</p>
                    <p>Continent: {c?.continent}</p>
                    <img src={c?.imgFlag} />
                </div>
            ))}
        </>
    );
};

export default AddCountries;