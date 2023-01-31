import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  width: 100%;
  background-color: #BDB76B;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid lightgray;
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: blue;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 2px solid lightgray;
  background-color: white;
`;

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #98FB98;
`;

export const LandingPageTittle = styled.h1`
  font-size: 36px;
  color: #4682B4;
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
  background-color: #00FF00;
  text-decoration: none;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
  background-color: #9370DB;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 20px;
`;

export const CardTitle = styled.p`
  font-size: 24px;
  color: white;
  margin-top: 20px;
`;

export const CardLabel = styled.label`
  font-size: 18px;
  color: gray;
  margin-top: 20px;
`;

export const CardList = styled.ul`
  list-style: none;
  color: white;
  margin-top: 20px;
`;

export const CardImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 20px;
`;

export const CardDetailCotainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 550px;
  background-color: #9370DB;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 20px;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #32CD32;
`;

export const HomeLink = styled.a`
  margin-top: 4px;
  padding: 4px;
  border-radius: 5px;
  background-color: #FF5733;
  text-decoration: none;
`;

export const HomeButton = styled.button`
  margin-top: 4px;
  padding: 4px;
  border-radius: 5px;
  background-color: #FF5733;
  text-decoration: none;
`;

export const NextPrevButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  background-color: #4B0082;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const Fondo = styled.div`
  background-color: #32CD32;
`;

export const ListItemFondo = styled.li`
  background-color: #32CD32;
`;