import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity, getCountries } from "../redux/actions";
import {
    FormContainer,
    FormInput,
    FormButton,
    FormSelect
} from "../styles/styles";

const Form = (props) => {
    const countries = useSelector(state => state.countries);
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        difficulty: 0,
        duration: "",
        season: "",
    });
    const [countriesSelected, setCountriesSelected] = useState([]);
    const countriesToSelect = countries.map(c => {
        return <option value={c.id}>{c.name}</option>
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const validateInputs = (inputs) => {
        const errors = {};

        if (!inputs.name) errors["name"] = "Se requiere un nombre";
        if (inputs.difficulty > 5) errors["difficulty"] = "La dificultad no puede ser mayor a 5";
        if (1 > inputs.difficulty) errors["difficulty"] = "La dificultad no puede ser menor a 1";
        if (!inputs.duration) errors["duration"] = "Se requiere especificar la duracion de la actividad";
        if (!inputs.season) errors["season"] = "Se requiere especificar la temporada de la actividad";
        if (!["Invierno", "Verano", "Otoño", "Primavera"].includes(inputs.season)) {
            errors["season"] = "La temporada no debe ser distinta de Verano, Invierno, Otoño o Primavera";
        }

        return errors;
    };

    const handleInputChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });

        setErrors(
            validateInputs({
                ...input,
                [event.target.name]: event.target.value,
            })
        );
    };

    const handleSelect = (event) => {
        const countrySelected = event.target.value;
        setCountriesSelected(prevState => {
            return [...prevState, countrySelected]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!countriesSelected.length) {
            window.alert("Debe seleccionar al menos un pais");
            return
        }

        if (!Object.keys(errors).length) {
            const { name, difficulty, duration, season } = input;
            dispatch(addActivity(countriesSelected, name, difficulty, duration, season));

            setInput({
                name: "",
                difficulty: 0,
                duration: "",
                season: ""
            });

            setErrors({
                name: "",
                difficulty: 0,
                duration: "",
                season: "",
            });

            return window.alert("Datos completos.");
        }
        return window.alert("Debes corregir los errores.");
    };

    return (
        <>
            <FormContainer>
                <h1>Creacion de Actividad Turistica</h1>
                <label>Nombre: </label>
                <FormInput type='text' name='name' value={input.name} onChange={handleInputChange}></FormInput>
                <p>{errors.name && errors.name}</p>

                <label>Dificultad: </label>
                <FormInput type='number' name='difficulty' value={input.difficulty} onChange={handleInputChange}></FormInput>
                <p>{errors.difficulty && errors.difficulty}</p>

                <label>Duracion: </label>
                <FormInput type='text' name='duration' value={input.duration} onChange={handleInputChange}></FormInput>
                <p>{errors.duration && errors.duration}</p>

                <label>Temporada: </label>
                <FormInput type="text" name='season' value={input.season} onChange={handleInputChange}></FormInput>
                <p>{errors.season && errors.season}</p>

                <label htmlFor="">Paises</label>
                <FormSelect name="paises" id="ps" onChange={handleSelect} multiple>
                    {countriesToSelect}
                </FormSelect>
                {!countriesSelected.length && <p>Debe seleccionar al menos un pais</p>}

                <FormButton type='submit' onClick={handleSubmit}>Crear Actividad</FormButton>
            </FormContainer>
        </>
    );
};

export default Form;