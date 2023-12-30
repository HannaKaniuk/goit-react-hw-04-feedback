import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {
    if (type === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (type === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (type === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          fontSize: 40,
          color: '#010101',
          margin: '30px',
        }}
      >
        <h1>Please leave feedback</h1>

        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    </div>
  );
};
