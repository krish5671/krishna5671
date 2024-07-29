import React, { useState } from 'react';

const SearchForm = ({ searchJourneys }) => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchJourneys(searchData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="from"
        placeholder="From"
        value={searchData.from}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="to"
        placeholder="To"
        value={searchData.to}
        onChange={handleChange}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
