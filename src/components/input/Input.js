import React from "react";
import { InputContainer, Input } from './InputStyled'

const TextInput = ({ placeholder, onChangeText, value, isSecure }) => {
    return (
        <InputContainer >
            <Input
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={isSecure}
            />
        </InputContainer>
    );
};

export default TextInput;