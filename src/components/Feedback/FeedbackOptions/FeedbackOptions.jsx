import React from 'react';
import { OptionsList, OptionButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsList>
    {options.map(option => (
      <li key={option}>
        <OptionButton onClick={() => onLeaveFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </OptionButton>
      </li>
    ))}
  </OptionsList>
);

export default FeedbackOptions;
