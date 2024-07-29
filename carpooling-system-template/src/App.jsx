import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import JourneyForm from './components/JourneyForm';
import SearchForm from './components/SearchForm';
import JourneyList from './components/JourneyList';
import './index.css';

const App = () => {
  const [journeys, setJourneys] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const addJourney = (journey) => {
    setJourneys([...journeys, journey]);
  };

  const searchJourneys = (searchData) => {
    const results = journeys.filter(journey =>
      journey.from.toLowerCase().includes(searchData.from.toLowerCase()) &&
      journey.to.toLowerCase().includes(searchData.to.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="container">
      <Header />
      <JourneyForm addJourney={addJourney} />
      <SearchForm searchJourneys={searchJourneys} />
      <h2>Search Results</h2>
      <JourneyList journeys={searchResults} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
export default App