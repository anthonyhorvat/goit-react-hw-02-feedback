import React from 'react';
import { OptionsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsList>
    {options.map(option => (
      <li key={option}>
        <button onClick={() => onLeaveFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      </li>
    ))}
  </OptionsList>
);

export default FeedbackOptions;
