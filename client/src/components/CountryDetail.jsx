import { getCountryById } from "../redux/actions/countriesActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Activities from "./Activities";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d8bfd8;
`;

const Link = styled.a`
  margin-right: 1rem;
  margin-top: 5;
  color: #fff;
  text-decoration: none;
  background-color: #007bff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
  &:hover {
    background-color: #0062cc;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 5;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  background-color: #9370db;
`;

const InfoTitle = styled.b`
  margin-right: 1rem;
`;

const Image = styled.img`
  width: 100%;
  margin-top: 2rem;
`;

const NoActivitiesMessage = styled.p`
  margin-top: 2rem;
`;

const CountryDetail = () => {
  const dispatch = useDispatch();
  const { countryId } = useParams();
  const country = useSelector((state) => state.countries.detail);

  useEffect(() => {
    dispatch(getCountryById(countryId));
  }, []);

  return (
    <DetailContainer>
      <div>
        <Link href="/home">HOME</Link>
        <Title>Country Detail</Title>
      </div>

      <InfoContainer>
        <p>
          <InfoTitle>ID</InfoTitle>: {country?.id}
        </p>
        <p>
          <InfoTitle>NAME</InfoTitle>: {country?.name}
        </p>
        <p>
          <InfoTitle>CAPITAL</InfoTitle>: {country?.capital}
        </p>
        <p>
          <InfoTitle>SUBREGION</InfoTitle>:{" "}
          {country?.subRegion ? country?.subRegion : "No posee subregion"}
        </p>
        <p>
          <InfoTitle>AREA</InfoTitle>: {country?.area} Km2
        </p>
        <p>
          <InfoTitle>POPULATION</InfoTitle>: {country?.poblacion}
        </p>
        <Image src={country?.imgFlag} alt={"Flag of " + country?.name + " "} />
      </InfoContainer>

      <label>
        <InfoTitle>TOURIST ACTIVITIES</InfoTitle>:
      </label>
      {country?.Activities?.length ? (
        <div>
          {country?.Activities.length && (
            <Activities activities={country?.Activities} />
          )}
        </div>
      ) : (
        <NoActivitiesMessage>
          It does not have tourist activities
        </NoActivitiesMessage>
      )}
    </DetailContainer>
  );
};

export default CountryDetail;