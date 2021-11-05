import React, { useState, useEffect } from "react";
import { ButtonsContainer, Container, Header, TopContainer, Form, Picker, Name, Text } from './LoginStyled'
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import DropDownPicker from 'react-native-dropdown-picker';


const Login = ({ navigation }) => {
    const [user, setUser] = useState(auth().currentUser);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("TR");

    const items = [
        { label: 'Türkçe', value: 'TR' },
        { label: 'English', value: 'EN' }
    ];

    const initialForm = {
        usermail: "",
        password: ""
    }

    const handleLogin = async (formValues) => {
        try {
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password)
            setUser(auth().currentUser)
        } catch (error) {
            console.log(error)
        }
    }
    const handleLogOut = async () => {
        try {
            await auth().signOut()
            console.log("signed out");
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(user)
    return (
        <Container >
            <TopContainer>
                <Header>Account</Header>
            </TopContainer>

            {user === null ? (
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
                                <Button title="Sign In" onPress={handleSubmit} bgColor='#E82223' />
                                <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} bgColor='#BBC3CF' />
                            </ButtonsContainer>
                        </Form>
                    )}
                </Formik>
            ) : (
                <Container>
                    <TopContainer>
                            <Name>{user.displayName}</Name>
                            <Text>E-mail: {user.email}</Text>
                            <Text>Password: ******</Text>
                        <Text>Current locale: {value} </Text>
                    </TopContainer>
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
                            <Button title="Log Out" onPress={handleLogOut} bgColor='#BBC3CF' textColor borderColor />

                    </ButtonsContainer>
                </Container>
            )}

        </Container>
    );
};

export default Login;