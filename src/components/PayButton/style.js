import styled from 'styled-components';

export const ButtonP = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({focused}) => (focused ? 'green' : '#CCC')};
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({focused}) => (focused ? '#FFF' : '#FFF')};
`;
