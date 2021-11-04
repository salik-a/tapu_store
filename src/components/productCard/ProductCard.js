import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Title, Description, NumberText, RowContainer, Image, InnerContainer, RedText, Vector, BottomContainer } from "./ProductCardStyled"
const ProductCard = ({ title, description, image, star, distance }) => {
    return (
        <Container>
            <RowContainer>
                <Image source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} />
                <InnerContainer>
                    <Title>Villa Bosphorus</Title>
                    <Description>Lorem İpsum Sit Dolor Met</Description>
                    <RowContainer>
                        <RowContainer>
                            <FontAwesome name="star-half-empty" color={"#ECD03F"} size={24} />
                            <NumberText>3.9</NumberText>
                        </RowContainer>
                        <RowContainer>
                            <Ionicons name="location" color={"#0DAFC0"} size={22} />
                            <NumberText>3.7 km</NumberText>
                        </RowContainer>
                    </RowContainer>
                </InnerContainer>
            </RowContainer>
            <BottomContainer>
                <RowContainer>
                    <Vector source={require('../../assets/Vector.png')} />
                    <RedText>SEPETE EKLE</RedText>
                </RowContainer>
            </BottomContainer>
        </Container>
    );
};

export default ProductCard;