import styled from 'styled-components';

export const OptionsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  justify-content: center;
`;

export const OptionButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
  }
`;
