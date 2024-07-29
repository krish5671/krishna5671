import React from 'react';

const JourneyList = ({ journeys }) => (
  <ul>
    {journeys.map((journey, index) => (
      <li key={index}>
        <strong>{journey.name}</strong> is driving from <strong>{journey.from}</strong> to <strong>{journey.to}</strong> on <strong>{journey.date}</strong> with <strong>{journey.seats}</strong> available seats. Contact: {journey.contact}. Luggage Space: {journey.luggage}.
      </li>
    ))}
  </ul>
);

export default JourneyList;
