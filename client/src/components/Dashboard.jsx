import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getActivities } from "../redux/actions/activityActions";
import Activities from "./Activities";

const Dashboard = () => {
    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities.list);

    useEffect(() => {
        dispatch(getActivities());
    }, []);

    return (
        <>
            <Activities activities={activities} />
        </>
    );
};

export default Dashboard;