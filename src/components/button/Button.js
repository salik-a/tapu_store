import React from "react";
import { ButtonContainer, ButtonText } from './ButtonStyled'

const Button = ({ onPress, primary, secondary, title, textColor, borderColor, disabled }) => {

    const color = disabled ? primary : secondary;
    return (
        <ButtonContainer testID="button-touchable" onPress={onPress} bgColor={color} borderColor={borderColor} disabled={disabled}>
            <ButtonText testID="button-title" textColor={textColor} >{title}</ButtonText>
        </ButtonContainer>
    );
};
export default Button;