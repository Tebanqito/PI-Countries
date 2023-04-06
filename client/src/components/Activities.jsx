import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PaginationContainer,
  PaginationButton,
  ActivityItemContainer,
  ActivityButton,
  ActivityName,
  Divider,
  BackgroundActivities,
} from "../styles/styles";


const Activities = ({ activities }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const activitiesPerPage = currentPage > 1 ? 10 : 9;
  const startIndex = (currentPage - 1) * activitiesPerPage;
  let endIndex = startIndex + activitiesPerPage;
  endIndex = endIndex > activities.length ? activities.length : endIndex;

  const activitiesToShow = activities.slice(startIndex, endIndex).map((a) => {
    return (
      <ActivityItemContainer key={a.id}>
        <ActivityButton onClick={() => navigate(`/activity/${a.id}`)}>DETAIL</ActivityButton>
        <ActivityButton onClick={() => navigate(`/addCountry/${a.id}`)}>ADD COUNTRIES</ActivityButton>
        <ActivityName>Activity name: {a.name}</ActivityName>
        <Divider />
      </ActivityItemContainer>
    );
  });

  const numActivities = activities.length;
  const finalPage = Math.ceil(numActivities / 10);

  const nextHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevHandler = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <BackgroundActivities>
      <h1>Activities</h1>

      <PaginationContainer>
        <PaginationButton onClick={prevHandler} disabled={currentPage === 1}>
          Prev
        </PaginationButton>
        <PaginationButton onClick={nextHandler} disabled={currentPage === finalPage}>
          Next
        </PaginationButton>
      </PaginationContainer>

      {activitiesToShow}

      <PaginationContainer>
        <PaginationButton onClick={prevHandler} disabled={currentPage === 1}>
          Prev
        </PaginationButton>
        <PaginationButton onClick={nextHandler} disabled={currentPage === finalPage}>
          Next
        </PaginationButton>
      </PaginationContainer>
    </BackgroundActivities>
  );
};

export default Activities;