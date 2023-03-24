import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addActivity,
  getActivities,
  getActivityById,
  updateActivityById,
} from "../redux/actions/activityActions";
import { getCountries } from "../redux/actions/countriesActions";
import {
  FormContainer,
  FormButton,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
  FormTitle,
  ErrorMessage,
} from "../styles/styles";
import Countries from "./Countries";

const Form = ({ id }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.list);
  const activities = useSelector((state) => state.activities.list);
  const activity = useSelector((state) => state.activities.detail);
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
  const [countriesId, setCountriesId] = useState([]);
  const countriesToSelect = countries.map((c) => {
    return (
      <FormOption key={c.id} value={c.id}>
        {c.name}
      </FormOption>
    );
  });

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
    if (id) dispatch(getActivityById(id));
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
    const selectedOptions = event.target.options;
    const selectedCountriesId = [];

    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i].selected) {
        selectedCountriesId.push(selectedOptions[i].value);
      }
    }

    setCountriesId(selectedCountriesId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!countriesId.length) {
      window.alert("Debe seleccionar al menos un pais.");
      return;
    }

    if (!Object.keys(errors).length) {
      const { name, difficulty, duration, season } = input;
      const activitiesNames = activities.map((a) => a.name.toLowerCase());

      if (activitiesNames.includes(name.toLowerCase())) {
        window.alert(`La actividad ${name} ya existe en la BDD.`);
        return;
      }

      if (id) {
        dispatch(
          updateActivityById(id, {
            countriesId,
            name,
            difficulty,
            duration,
            season,
          })
        );
      } else {
        dispatch(
          addActivity({ countriesId, name, difficulty, duration, season })
        );
      }

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
    <div>
      <FormContainer>
        <FormTitle>{id ? "Update" : "Creation"} of Tourist Activity</FormTitle>
        <FormLabel>Name:</FormLabel>
        <FormInput
          type="text"
          name="name"
          value={input.name}
          onChange={handleInputChange}
          placeholder={id ? activity.name : "name"}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

        <FormLabel>Difficulty:</FormLabel>
        <FormInput
          type="number"
          name="difficulty"
          value={input.difficulty}
          onChange={handleInputChange}
          placeholder={id ? activity.difficulty : "difficulty"}
        />
        {errors.difficulty && <ErrorMessage>{errors.difficulty}</ErrorMessage>}

        <FormLabel>Duration:</FormLabel>
        <FormInput
          type="text"
          name="duration"
          value={input.duration}
          onChange={handleInputChange}
          placeholder={id ? activity.duration : "duration"}
        />
        {errors.duration && <ErrorMessage>{errors.duration}</ErrorMessage>}

        <FormLabel>Season:</FormLabel>
        <FormInput
          type="text"
          name="season"
          value={input.season}
          onChange={handleInputChange}
          placeholder={id ? activity.season : "season"}
        />
        {errors.season && <ErrorMessage>{errors.season}</ErrorMessage>}

        <FormLabel htmlFor="">Countries where it develops</FormLabel>
        <FormSelect
          name="countries"
          value={countriesId}
          onChange={handleSelect}
          multiple
        >
          {countriesToSelect}
        </FormSelect>
        {!countriesId.length && <p>You must select at least one country</p>}

        <FormButton type="submit" onClick={handleSubmit}>
          {id ? "Update Activity" : "Create Activity"}
        </FormButton>
      </FormContainer>

      {id && <Countries countries={activity.countries} admin={true} />}
    </div>
  );
};

export default Form;