import React from 'react';
import { Container, Header, PriceText, TotalText } from './TotalCardStyled';
import { useSelector } from "react-redux";
const TotalCard = () => {

    const priceList = useSelector(selector => selector.prices);
    const reducer = priceList.reduce((accumulator, curr) => accumulator + curr);
    const tax = reducer === 0 ? 0 : 21.45;
    const total = tax + reducer;

    return (
        <Container>
            <Header>Ürünlerin Toplamı:</Header>
            <PriceText>Toplam: {reducer} TL</PriceText>
            <PriceText>Vergiler + Kargo: {tax} TL</PriceText>
            <TotalText>Genel Toplam: {total} TL</TotalText>
        </Container>
    )
}

export default TotalCard;