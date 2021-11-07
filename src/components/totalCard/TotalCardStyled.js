
import styled from 'styled-components/native';

const Container = styled.View`
    paddingVertical:10px;
    paddingHorizontal:35px;
    marginBottom: 50px;
`;

const Header = styled.Text`

    font-size: 24px;
    color: black;
    font-weight: 700;
    marginVertical:10px

`;
const PriceText = styled.Text`
    font-size: 18px;
    color: black;
    font-weight: 200;
    marginVertical:5px
`;
const TotalText = styled.Text`
    font-size: 22px;
    color: black;
    font-weight: 700;
    marginVertical:6px
`;




export { Container, Header, PriceText, TotalText }