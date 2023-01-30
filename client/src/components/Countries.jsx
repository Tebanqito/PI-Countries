import { useState } from "react";
import { Link } from "react-router-dom";
import {
    CardContainer,
    CardImage,
    NextPrevButton,
    HomeLink
} from "../styles/styles";

const Countries = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    let until = currentPage * 10;
    const from = until - 10;

    if (currentPage < 2) until = until - 1;
    const countries = props.countries.slice(from, until);

    const countriesToShow = countries.map(country => {
        return <li key={country.id}>
            <CardContainer>
                <Link to={`/country/${country.id}`}>Detalle</Link>
                <p><b>NOMBRE</b>: {country.name}</p>
                <p><b>CONTINENTE</b>: {country.continent}</p>
                <CardImage src={country.imgFlag} alt={`Flag of ${country.name}`} />
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
                {currentPage < props.finalPage && <NextPrevButton onClick={nextHandler}>Next</NextPrevButton>}
            </div>

            <ul>
                {countriesToShow}
            </ul>

            <div>
                {currentPage > 1 && <NextPrevButton onClick={prevHandler}>Prev</NextPrevButton>}
                {currentPage < props.finalPage && <NextPrevButton onClick={nextHandler}>Next</NextPrevButton>}
            </div>
        </>
    );
}

export default Countries;