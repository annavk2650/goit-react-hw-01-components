import PropTypes from 'prop-types';
import { Statistic, Title, StatList, Item, Label } from './Statistic.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>Upload stats</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} bgColor={getRandomHexColor()}>
              <Label>{label}</Label>
              <span>{percentage}</span>
            </Item>
          );
        })}
      </StatList>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ).isRequired,
};
