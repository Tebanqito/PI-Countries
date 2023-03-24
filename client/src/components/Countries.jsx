import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    CardContainer,
    CardImage,
    NextPrevButton,
    DetailButton
} from "../styles/styles";
import { unlinkCountry, linkCountry } from "../redux/actions/activityActions";

const Countries = (props) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const countriesPerPage = currentPage === 1 ? 9 : 10;
    const startIndex = (currentPage - 1) * countriesPerPage;
    const endIndex = startIndex + countriesPerPage;

    const countries = props.countries.slice(startIndex, endIndex);

    const numCountries = props.countries.length;
    const finalPage = Math.ceil((numCountries - 9) / 10) + 1;

    const countriesToShow = countries.map(country => {
        return <li key={country?.id}>
            <CardContainer>
                <DetailButton onClick={() => navigate(`/country/${country?.id}`)}>DETAIL</DetailButton>
                {props.admin && <button onClick={() => unlinkCountry({countryId: country?.id, activityId: props.id})}>UNLINK</button>}
                {props.dashboard && <button onClick={() => linkCountry({countryId: country?.id, activityId: props.id})}>LINK</button>}
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