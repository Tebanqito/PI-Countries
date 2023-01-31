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
        name: '',
        difficulty: '',
        duration: '',
        season: ''
    });
    const [optionsSelected, setOptionsSelected] = useState([]);
    const countriesToSelect = countries.map(c => {
        return <option value={c.id}>{c.name}</option>
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const handleInputChange = (event) => {
        const valueInput = event.target.value;
        const nameInput = event.target.name;
        setInput({ ...input, [nameInput]: valueInput })
    };

    const handleSelect = (event) => {
        const opcionSelected = event.target.value;
        setOptionsSelected(prevState => {
            return [...prevState, opcionSelected]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!optionsSelected.length && !input.name && !input.difficulty && !input.duration && !input.season) {
            console.log("faltan completar datos");
            return;
        }

        const { name, difficulty, duration, season } = input;
        dispatch(addActivity(optionsSelected, name, difficulty, duration, season));
    };

    return (
        <>
            <FormContainer>
                <h1>Creacion de Actividad Turistica</h1>
                <label>Nombre: </label>
                <FormInput type='text' name='name' value={input.name} onChange={handleInputChange}></FormInput>

                <label>Dificultad: </label>
                <FormInput type='number' name='difficulty' value={input.difficulty} onChange={handleInputChange}></FormInput>

                <label>Duracion: </label>
                <FormInput type='text' name='duration' value={input.duration} onChange={handleInputChange}></FormInput>

                <label>Temporada: </label>
                <FormInput type="text" name='season' value={input.season} onChange={handleInputChange}></FormInput>

                <label htmlFor="">Paises</label>
                <FormSelect name="paises" id="ps" onChange={handleSelect} multiple>
                    {countriesToSelect}
                </FormSelect>

                <FormButton type='submit' onClick={handleSubmit}>Crear Actividad</FormButton>
            </FormContainer>
        </>
    );
};

export default Form;