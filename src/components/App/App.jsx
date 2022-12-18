import React from 'react';
import { FeedbackMurkup } from 'components/Feadback/Feadback';
import {
  DefaultText,
  Statistics,
  Total,
} from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { useState } from 'react';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutural, setNeutural] = useState(0);
  const [bad, setBad] = useState(0);

  const clickHandler = e => {
    const name = e.target.name;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutural':
        setNeutural(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = bad + good + neutural;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const persent = good / countTotalFeedback();
    return persent ? Math.round(persent * 100) : 0;
  };

  return (
    <>
      <Section title={'Please leave feed and back'}>
        <FeedbackMurkup onClick={clickHandler} />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section>
          <Statistics Good={good} Bad={bad} Neutural={neutural} />
          <Total
            Total={countTotalFeedback()}
            persentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <DefaultText />
      )}
    </>
  );
};

export const App = () => {
  return <Feedback />;
};
