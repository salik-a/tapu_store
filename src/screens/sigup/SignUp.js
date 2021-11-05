import React, { useState } from "react";
import { ButtonsContainer, Container, Header, TopContainer, Form, Picker, Name, Text } from './SignUpStyled'
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import DropDownPicker from 'react-native-dropdown-picker';


const SignUp = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("TR");


    const items = [
        { label: 'Türkçe', value: 'TR' },
        { label: 'English', value: 'EN' }
    ];

    const initialForm = {
        usermail: "",
        password: "",
        username: ""
    }

    const handleLogin = async (formValues) => {
        try {

            await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password)
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password)
            const update = {
                displayName: formValues.username,
            };
            await auth().currentUser.updateProfile(update);
            navigation.navigate("Login")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container >
            <TopContainer>
                <Header>Account</Header>
            </TopContainer>


            <Formik
                initialValues={initialForm}
                onSubmit={values => handleLogin(values)}
            >
                {({ handleSubmit, values, handleChange }) => (
                    <Form>
                        <Input
                            placeholder="E-Mail"
                            onChangeText={handleChange('usermail')}
                            value={values.usermail}
                        />
                        <Input
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            value={values.password}
                            isSecure={true}
                        />
                        <Input
                            placeholder="Username"
                            onChangeText={handleChange('username')}
                            value={values.username}

                        />
                        <Picker>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={() => setOpen(!open)}
                                setValue={setValue}

                                dropDownContainerStyle={{
                                    width: "100%",
                                    alignSelf: 'center',
                                    position: 'relative',
                                    top: 0,
                                    borderColor: "white"
                                }}
                                listMode="SCROLLVIEW"
                                style={{
                                    height: 40,
                                    alignSelf: 'center',
                                    marginTop: 10,
                                    backgroundColor: "white",
                                    borderColor: "white",

                                }}
                                labelStyle={{
                                    fontSize: 16,
                                }}

                            />
                        </Picker>
                        <ButtonsContainer>
                            <Button title="Sign Up" onPress={handleSubmit} bgColor='#E82223' />
                        </ButtonsContainer>
                    </Form>
                )}
            </Formik>

        </Container>
    );
};

export default SignUp;