import React, { useState } from 'react';

const JourneyForm = ({ addJourney }) => {
  const [formData, setFormData] = useState({
    name: '',
    from: '',
    to: '',
    date: '',
    seats: '',
    contact: '',
    luggage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJourney(formData);
    setFormData({
      name: '',
      from: '',
      to: '',
      date: '',
      seats: '',
      contact: '',
      luggage: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="from"
        placeholder="From"
        value={formData.from}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="to"
        placeholder="To"
        value={formData.to}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="seats"
        placeholder="Available Seats"
        value={formData.seats}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact Info"
        value={formData.contact}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="luggage"
        placeholder="Space for Luggage"
        value={formData.luggage}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JourneyForm;
