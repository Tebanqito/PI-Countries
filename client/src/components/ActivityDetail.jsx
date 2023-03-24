import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getActivityById } from "../redux/actions/activityActions";
import { getCountriesByActivityId } from "../redux/actions/countriesActions";
import {
    ActivityDifficulty,
    ActivityDuration,
    ActivityName,
    ActivitySeason,
    ActivityContainer,
} from "../styles/styles";
import Countries from "./Countries";

const ActivityDetail = (props) => {
    const dispatch = useDispatch();
    const { activityId } = useParams();
    const activity = useSelector(state => state.activities.detail);
    const countries = useSelector(state => state.countries.list);
    const [renderActivity, setRenderActivity] = useState(true);

    useEffect(() => {
        dispatch(getActivityById(activityId));
        dispatch(getCountriesByActivityId(activityId));
    }, [renderActivity]);

    return (
        <ActivityContainer>
            <ActivityContainer>
                <ActivityName>Activity name: {activity?.name}</ActivityName>
                <ActivityDifficulty>Difficulty: {activity?.difficulty}</ActivityDifficulty>
                <ActivitySeason>Season: {activity?.season}</ActivitySeason>
                <ActivityDuration>Duration: {activity?.duration}</ActivityDuration>
            </ActivityContainer>

            {countries.length && <Countries
                noDetail={true}
                countries={countries}
                adminUnlinkCountry={true}
                setRenderActivity={setRenderActivity}
                renderActivity={renderActivity}
                activityId={activityId}
            />}
        </ActivityContainer>
    );
};

export default ActivityDetail;