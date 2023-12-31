import React, { Component } from 'react';
import Statistic from './Feedback/Statistic/Statistic';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Feedback/Notification/Notification';
import { StyledContainer } from './App.styled';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const feedbackValues = Object.values({ good, neutral, bad });
    const totalFeedback = feedbackValues.reduce(
      (total, value) => total + value,
      0
    );

    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const feedbackOptions = Object.keys(this.state);

    return (
      <StyledContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section>
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </StyledContainer>
    );
  }
}
