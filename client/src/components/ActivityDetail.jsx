import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getActivityById } from "../redux/actions/activityActions";
import {
    ActivityDifficulty,
    ActivityDuration,
    ActivityName,
    ActivitySeason
} from "../styles/styles";
import Countries from "./Countries";

const ActivityDetail = (props) => {
    const dispatch = useDispatch();
    const { activityId } = useParams();
    const activity = useSelector(state => state.activities.detail);
    const [renderActivity, setRenderActivity] = useState(true);

    useEffect(() => {
        dispatch(getActivityById(activityId));
    }, [renderActivity]);

    return (
        <div>
            <div>
                <ActivityName>NAME: {activity.name}</ActivityName>
                <ActivityDifficulty>DIFFICULTY: {activity.difficulty}</ActivityDifficulty>
                <ActivitySeason>DIFFICULTY: {activity.season}</ActivitySeason>
                <ActivityDuration>DIFFICULTY: {activity.duration}</ActivityDuration>
            </div>

            <Countries
                countries={activity?.countries}
                adminUnlinkCountry={true}
                setRenderActivity={setRenderActivity}
                renderActivity={renderActivity}
                activityId={activityId}
            />
        </div>
    );
};

export default ActivityDetail;