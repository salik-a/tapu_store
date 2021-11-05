import React from 'react';
import styled from 'styled-components/native';
const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 10px;
  width: 85%;
  height: 50px;
  padding: 12px;
  border-radius: 12px;
  background-color: ${props => props.bgColor };
  align-self: center;
  align-Items: center;
  justify-content: center;
  borderColor: ${props => props.borderColor};
  borderWidth: 1px;
`;
const ButtonText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${props => props.textColor};
`;


export { ButtonContainer, ButtonText, }