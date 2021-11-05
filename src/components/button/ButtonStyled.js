import React from 'react';
import styled from 'styled-components/native';
const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 10px;
  width: 85%;
  height: 50px;
  padding: 12px;
  border-radius: 15px;
  background-color: ${props => props.bgColor};
  align-self: center;
  align-Items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: white;
`;


export { ButtonContainer, ButtonText, }