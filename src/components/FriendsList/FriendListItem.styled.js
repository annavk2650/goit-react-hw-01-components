import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.color === 'true') {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const Avatar = styled.img`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
