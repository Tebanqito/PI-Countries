import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getActivities } from "../redux/actions/activityActions";
import {
  ActivityContainer,
  ActivityName,
  ActivityItemContainer,
  ActivityButton,
  Divider,
} from "../styles/styles";

const Activities = (props) => {
  const activities = useSelector(state => state.activities.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  return (
    <ActivityContainer>
      {activities.map((a) => (
        <ActivityItemContainer key={a.id}>
          <ActivityButton onClick={() => navigate(`/activity/${a.id}`)}>DETAIL</ActivityButton>
          <ActivityName>Activity name: {a.name}</ActivityName>
          <Divider />
        </ActivityItemContainer>
      ))}
    </ActivityContainer>
  );
};

export default Activities;