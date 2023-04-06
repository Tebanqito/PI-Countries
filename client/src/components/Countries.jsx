import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    CardContainer,
    CardImage,
    NextPrevButton,
    DetailButton,
} from "../styles/styles";
import { unlinkCountry, linkCountry } from "../redux/actions/activityActions";
import { getCountries } from "../redux/actions/countriesActions";

const Countries = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { activityId } = props;
    const [renderCountries, setRenderCountries] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const countriesPerPage = currentPage === 1 ? 9 : 10;
    const startIndex = (currentPage - 1) * countriesPerPage;
    const endIndex = startIndex + countriesPerPage;

    const countries = props.countries.slice(startIndex, endIndex);

    const numCountries = props.countries.length;
    const finalPage = Math.ceil((numCountries - 9) / 10) + 1;

    useEffect(() => {
        if (!props.setRenderActivity && !props.adminlinkCountry) dispatch(getCountries());
    }, [renderCountries]);

    const countriesToShow = countries.map(country => {
        return <li key={country?.id}>
            <CardContainer>
                {!props.noDetail && <DetailButton onClick={() => navigate(`/country/${country?.id}`)}>DETAIL</DetailButton>}
                {props.adminUnlinkCountry && <button onClick={() => {
                    dispatch(unlinkCountry({ countryId: country?.id, activityId: activityId }));
                    if (setRenderCountries) setRenderCountries(!renderCountries);
                    if (props.setRenderActivity) props.setRenderActivity(!props.renderActivity);
                }}>UNLINK</button>}
                {props.adminlinkCountry && <button onClick={() => {
                    dispatch(linkCountry({ countryId: country?.id, activityId: activityId }));
                    props.setRenderAddCountries(!props.renderAddCountries);
                }}>LINK</button>}
                <p><b>NAME</b>: {country?.name}</p>
                <p><b>CONTINENT</b>: {country?.continent}</p>
                <CardImage src={country?.imgFlag} alt={`Flag of ${country?.name} `} />
            </CardContainer>
        </li>
    });

    const nextHandler = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevHandler = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <h1>Countries</h1>
            <div>
                {currentPage > 1 && <NextPrevButton onClick={prevHandler}>Prev</NextPrevButton>}
                {currentPage < finalPage && <NextPrevButton onClick={nextHandler}>Next</NextPrevButton>}
            </div>

            <ul>
                {countriesToShow}
            </ul>

            <div>
                {currentPage > 1 && <NextPrevButton onClick={prevHandler}>Prev</NextPrevButton>}
                {currentPage < finalPage && <NextPrevButton onClick={nextHandler}>Next</NextPrevButton>}
            </div>
        </>
    );
}

export default Countries;