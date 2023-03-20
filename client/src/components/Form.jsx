import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity } from "../redux/actions/activityActions";
import { getCountries } from "../redux/actions/countriesActions";
import {
  FormContainer,
  FormInput,
  FormButton,
  FormSelect,
} from "../styles/styles";

const Form = (props) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.list);
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    season: "",
  });
  const [countriesSelected, setCountriesSelected] = useState([]);
  const countriesToSelect = countries.map((c) => {
    return <option value={c.id}>{c.name}</option>;
  });

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const validateInputs = (inputs) => {
    const errors = {};

    if (!inputs.name) errors["name"] = "A name is required";
    if (inputs.difficulty > 5)
      errors["difficulty"] = "Difficulty cannot be higher than 5";
    if (1 > inputs.difficulty)
      errors["difficulty"] = "Difficulty cannot be less than 1";
    if (!inputs.duration)
      errors["duration"] =
        "It is required to specify the duration of the activity";
    if (!inputs.season)
      errors["season"] = "It is required to specify the season of the activity";
    if (!["Summer", "Autumn", "Winter", "Spring"].includes(inputs.season)) {
      errors["season"] =
        "The season must not be different from Summer, Winter, Autumn or Spring";
    }

    return errors;
  };

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
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
    setCountriesSelected((prevState) => {
      return [...prevState, countrySelected];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!countriesSelected.length) {
      window.alert("Debe seleccionar al menos un pais");
      return;
    }

    if (!Object.keys(errors).length) {
      const { name, difficulty, duration, season } = input;
      dispatch(
        addActivity(countriesSelected, name, difficulty, duration, season)
      );

      setInput({
        name: "",
        difficulty: 0,
        duration: "",
        season: "",
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
        <h1>Creation of Tourist Activity</h1>
        <label>Name: </label>
        <FormInput
          type="text"
          name="name"
          value={input.name}
          onChange={handleInputChange}
        ></FormInput>
        {errors.name && <p>{errors.name}</p>}

        <label>Difficulty: </label>
        <FormInput
          type="number"
          name="difficulty"
          value={input.difficulty}
          onChange={handleInputChange}
        ></FormInput>
        {errors.difficulty && <p>{errors.difficulty}</p>}

        <label>Duration: </label>
        <FormInput
          type="text"
          name="duration"
          value={input.duration}
          onChange={handleInputChange}
        ></FormInput>
        {errors.duration && <p>{errors.duration}</p>}

        <label>Season: </label>
        <FormInput
          type="text"
          name="season"
          value={input.season}
          onChange={handleInputChange}
        ></FormInput>
        {errors.season && <p>{errors.season}</p>}

        <label htmlFor="">Countries where it develops</label>
        <FormSelect name="paises" id="ps" onChange={handleSelect} multiple>
          {countriesToSelect}
        </FormSelect>
        {!countriesSelected.length && (
          <p>You must select at least one country</p>
        )}

        <FormButton type="submit" onClick={handleSubmit}>
          Create Activity
        </FormButton>
      </FormContainer>
    </>
  );
};

export default Form;
