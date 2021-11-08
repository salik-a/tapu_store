
import styled from 'styled-components/native';

const Container = styled.View`
    background-color: white;
    flex:1 


`;
const List = styled.FlatList`
  
`;

const Center = styled.View`
    alignItems: center;
    justifyContent: center;
    flex: 1;


`;

const ActivityIndicator = styled.ActivityIndicator`
  
`;

const Header = styled.Text`

    font-size: 30px;
    color: black;
    font-weight: 800;
    marginVertical:10px

`;
const Text = styled.Text`

    font-size: 34px;
    color: black;
    font-weight: bold;
    marginBottom:20px

`;

export { Container, List, Center, ActivityIndicator, Header, Text }