import styled from 'styled-components';

export const Statistic = styled.section`
  padding-bottom: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 21px;
`;
export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  border: 1px solid #e9eef3;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
  padding: 5px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 50px;
  background-color: ${props => props.bgColor};
`;
export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 10px;
`;
