

import React from 'react';
import styled from 'styled-components/native';
const Container = styled.View`
    flex: 1;
    backgroundColor: white;
    
`;
const ButtonsContainer = styled.View`
    marginTop: 25px;
`;
const TopContainer = styled.View`
    marginTop: 25px;
    marginBottom: 15px;
    width:85%;
    align-self: center;
`;
const Picker = styled.View`
    borderBottomWidth: 2px;
    borderColor: #64738C;
    width:85%;
    align-self: center;
`;

const Header = styled.Text`

    font-size: 30px;
    color: black;
    font-weight: 800;
    marginVertical:10px

`;
const Name = styled.Text`

    font-size: 34px;
    color: black;
    font-weight: bold;
    marginBottom:20px

`;
const Text = styled.Text`

    font-size: 16px;
    color: black;
    marginVertical: 2px;
    


`;
const Warn = styled.Text`
    fontSize: 12px;
    color: #FF0D10;
    width:85%;
    align-self: center;
`;

const Form = styled.View`

    
`;

const BottomContainer = styled.View`

    flex: 1;
    justifyContent: flex-end;
    marginBottom: 60px;
`;


export { ButtonsContainer, Container, Header, TopContainer, Form, Picker, Name, Text, Warn, BottomContainer }