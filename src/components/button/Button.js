import React from "react";
import { ButtonContainer, ButtonText } from './ButtonStyled'

const Button = ({ onPress, bgColor, title }) => (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);
export default Button;