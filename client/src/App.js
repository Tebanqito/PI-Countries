import './App.css';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/country/:countryId" element={<CountryDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activity" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
