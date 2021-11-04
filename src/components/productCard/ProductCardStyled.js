import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: white;
  margin: 5px;
  background-color: white;
  padding: 10px


`;
const InnerContainer = styled.View`

`;
const Title = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: 500;
  fontFamily: Nunito Sans;
`;

const Description = styled.Text`
  font-size: 14px;
  color: gray;
  marginVertical:10px;
  width:200px

`;

const NumberText = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: 300;
  marginRight: 15px;
  marginLeft: 5px;
`;

const RowContainer = styled.View`
  flexDirection: row;
`;

const Image = styled.Image`
  borderRadius: 20px;
  width:110px;
  height:110px;
  marginHorizontal:25px;

`;


const RedText = styled.Text`
  font-size: 18px;
  color: #E82223;
  font-weight: 700;
  marginLeft: 10px;
`;

const Vector = styled.Image`

  width:25px;
  height:25px;
  resizeMode: contain;
`;

const BottomContainer = styled.TouchableOpacity`
  marginTop:15px;
  background-color: white;
  justify-content: center;
  alignItems: center;
`;

export { Container, Title, Description, NumberText, RowContainer, Image, InnerContainer, RedText, Vector, BottomContainer }