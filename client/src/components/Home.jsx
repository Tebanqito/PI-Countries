import Countries from "./Countries";
import FilterContinent from "./FilterContinent";
import FilterActivity from "./FilterActivity";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { cleanCountries, getCountries } from "../redux/actions";
import {
    HomeContainer
} from "../styles/styles";

export default function Home() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    const [filtroContinent, setFiltroContinent] = useState("");
    const [filtroActivity, setFiltroActivity] = useState("");
    const [countriesAsc, setCountriesAsc] = useState([]);
    const [countriesDesc, setCountriesDesc] = useState([]);
    const [countriesPobl, setCountriesPobl] = useState([]);

    const countriesContinent = !filtroContinent ? [] : countries.filter(c => {
        return c.continent.toLowerCase().includes(filtroContinent.toLowerCase());
    });

    const countriesActivity = !filtroActivity ? [] : countries.filter(c => {
        return c.Activities.find(a => a.name.toLowerCase().includes(filtroActivity.toLowerCase()));
    });

    useEffect(() => {
        dispatch(getCountries());
        return () => {
            // dispatch(cleanCountries());
        }
    }, []);

    const filterAlfabeticamenteAsc = () => {
        if (countriesDesc.length) setCountriesDesc([]);
        if (countriesPobl.length) setCountriesPobl([]);
        setCountriesAsc(countries.sort((c1, c2) => {
            if (c1.name < c2.name) return -1;
            else if (c1.name > c2.name) return 1;
            else return 0;
        }));
    };

    const filterAlfabeticamenteDesc = () => {
        if (countriesAsc.length) setCountriesAsc([]);
        if (countriesPobl.length) setCountriesPobl([]);
        setCountriesDesc(countries.sort((c1, c2) => {
            if (c1.name > c2.name) return -1;
            else if (c1.name < c2.name) return 1;
            else return 0;
        }));
    };

    const ordenarCantidadPoblacion = () => {
        if (countriesAsc.length) setCountriesAsc([]);
        if (countriesDesc.length) setCountriesDesc([]);
        setCountriesPobl(countries.sort((c1, c2) => {
            if (c1.poblacion > c2.poblacion) return -1;
            else if (c1.poblacion < c2.poblacion) return 1;
            else return 0;
        }));
    };

    return (
        <HomeContainer>
            <div>
                <button onClick={filterAlfabeticamenteAsc}>ordenar ascendentemente alfabeticamente</button>
            </div>
            <div>
                <button onClick={filterAlfabeticamenteDesc}>ordenar descendentemente alfabeticamente</button>
            </div>
            <div>
                <button onClick={ordenarCantidadPoblacion}>ordenar por cantidad de poblacion</button>
            </div>

            <FilterContinent
                filtro={filtroContinent}
                setFiltro={setFiltroContinent}
            />

            <FilterActivity
                filtro={filtroActivity}
                setFiltro={setFiltroActivity}
            />

            {!countriesContinent.length && !countriesActivity.length && !countriesAsc.length && !countriesDesc.length && !countriesPobl.length &&
                <Countries
                    countries={countries}
                    finalPage={Math.floor(countries.length / 10)} />}

            {countriesContinent.length && !countriesAsc.length && !countriesDesc.length && !countriesPobl.length &&
                <Countries
                    countries={countriesContinent}
                    finalPage={Math.floor(countriesContinent.length / 10)} />}

            {countriesActivity.length && !countriesAsc.length && !countriesDesc.length && !countriesPobl.length && 
                <Countries
                    countries={countriesActivity}
                    finalPage={Math.floor(countriesActivity.length / 10)} />}

            {countriesAsc.length && <Countries
                countries={countriesAsc}
                finalPage={Math.floor(countriesAsc.length / 10)} />}

            {countriesDesc.length && <Countries
                countries={countriesDesc}
                finalPage={Math.floor(countriesDesc.length / 10)} />}

            {countriesPobl.length && <Countries
                countries={countriesPobl}
                finalPage={Math.floor(countriesPobl.length / 10)} />}
        </HomeContainer>
    );
}