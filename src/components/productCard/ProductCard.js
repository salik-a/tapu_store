import React from 'react';
import { Dimensions, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Title, Description, NumberText, RowContainer, Image, InnerContainer, RedText, Vector, BottomContainer } from "./ProductCardStyled"



const ProductCard = ({ data, onPress, idList }) => {


    return (


        <Container>
            <RowContainer>
                <Image source={{
                    uri: `${data.image}`,
                }} />
                <InnerContainer>
                    <Title>{data.title}</Title>
                    <Description>{data.detail}</Description>
                    <RowContainer>
                        <RowContainer>
                            <FontAwesome name="star-half-empty" color={"#ECD03F"} size={24} />
                            <NumberText>{data.star}</NumberText>
                        </RowContainer>
                        <RowContainer>
                            <Ionicons name="location" color={"#0DAFC0"} size={22} />
                            <NumberText>{data.distance} km</NumberText>
                        </RowContainer>
                    </RowContainer>
                </InnerContainer>
            </RowContainer>
            <BottomContainer onPress={onPress}>
                <RowContainer>
                    <Vector source={require('../../assets/Vector.png')} />
                    <RedText>
                        {idList.includes(data.id) ? "SEPETTEN ÇIKAR" : "SEPETE EKLE"}
                    </RedText>
                </RowContainer>
            </BottomContainer>
        </Container>


    );
};

export default ProductCard;