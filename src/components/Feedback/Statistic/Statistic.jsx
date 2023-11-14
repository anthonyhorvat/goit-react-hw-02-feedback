import { StatisticList } from './Statistic.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticList>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
  </StatisticList>
);

export default Statistics;
