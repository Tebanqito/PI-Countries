import {
  ActivitiesList,
  ActivityItem,
  ActivityName,
} from "../styles/styles";

const Activities = ({ activities }) => {
  return (
    <>
      <ActivitiesList>
        {activities.map((a) => (
          <ActivityItem key={a.id}>
            <ActivityName>NAME: {a.name}</ActivityName>
            <hr />
          </ActivityItem>
        ))}
      </ActivitiesList>
    </>
  );
};

export default Activities;