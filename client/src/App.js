import "./App.css";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";
import ActivityDetail from "./components/ActivityDetail";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Activities from "./components/Activities";
import AddCountries from "./components/AddCountries";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/country/:countryId" element={<CountryDetail />} />
        <Route path="/activity/:activityId" element={<ActivityDetail />} />
        <Route path="/addCountries/:activityId" element={<AddCountries />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activity" element={<Form />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
