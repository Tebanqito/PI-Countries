import {
  ActivitiesList,
  ActivityDifficulty,
  ActivityDuration,
  ActivityItem,
  ActivityName,
  ActivitySeason,
} from "../styles/styles";

const Activities = ({ activities }) => {
  return (
    <>
      <ActivitiesList>
        {activities.map((a) => (
          <ActivityItem key={a.id}>
            <ActivityName>NAME: {a.name}</ActivityName>
            <ActivityDifficulty difficulty={a.difficulty}>
              DIFFICULTY: {a.difficulty}
            </ActivityDifficulty>
            <ActivityDuration>DURATIÓN: {a.duration}</ActivityDuration>
            <ActivitySeason>SEASON: {a.season}</ActivitySeason>
            <hr />
          </ActivityItem>
        ))}
      </ActivitiesList>
    </>
  );
};

export default Activities;
