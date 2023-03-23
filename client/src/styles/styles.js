import styled from "styled-components";

export const StartButton = styled.button`
  margin-top: 5px;
  background-color: #7cfc00;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    margin-top: 5px;
    background-color: #00ff00;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #9370db;
  padding: 2rem;
  box-sizing: border-box;
`;

export const FormTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #000000;
`;

export const FormLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #000000;
`;

export const FormInput = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #6cb2eb;
  }
`;

export const ErrorMessage = styled.p`
  color: #f44336;
  margin-top: 0.5rem;
`;

export const FormButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  background-color: #6cb2eb;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4a90e2;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const FormSelect = styled.select`
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #6cb2eb;
  }
`;

export const FormOption = styled.option`
  font-size: 1.2rem;
`;

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #98fb98;
`;

export const LandingPageTittle = styled.h1`
  font-size: 36px;
  color: #4682b4;
  margin-top: 20px;
`;

export const LandingPageImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 20px;
`;

export const LandingPageLink = styled.a`
  margin-top: 4px;
  padding: 4px;
  border-radius: 5px;
  background-color: #00ff00;
  text-decoration: none;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
  background-color: #9370db;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 20px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d8bfd8;
`;

export const HomeLink = styled.a`
  margin-top: 4px;
  padding: 4px;
  border-radius: 5px;
  background-color: #ff5733;
  text-decoration: none;
`;

export const NextPrevButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  background-color: #4b0082;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const DetailButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  background-color: #daa520;
  color: black;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ListItemFondo = styled.li`
  background-color: #32cd32;
`;

export const BackgroundFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  label {
    margin-right: 1rem;
    font-weight: bold;
  }

  select {
    width: 20rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0069d9;
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

export const ActivityItem = styled.i`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ActivityName = styled.b`
  color: #333;
  font-size: 1.2rem;
`;

export const ActivityDifficulty = styled.p`
  color: ${({ difficulty }) =>
    difficulty === "Baja"
      ? "#5cb85c"
      : difficulty === "Media"
      ? "#f0ad4e"
      : "#d9534f"};
`;

export const ActivitiesList = styled.ul`
  list-style-type: none;
`;

export const ActivityDuration = styled.p`
  font-style: italic;
`;

export const ActivitySeason = styled.p`
  text-transform: capitalize;
`;

export const FilterSearchButton = styled.button`
  margin-top: 5px;
  background-color: #0077b6;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    margin-top: 5px;
    background-color: #023e8a;
  }
`;

export const FilterContinentSelect = styled.select`
  margin-top: 5px;
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 16px;
  color: #333;
  border: 2px solid #ccc;
`;

export const FilterLabel = styled.label`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
`;

export const FilterContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  padding: 16px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
