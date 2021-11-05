import React, { useState, useEffect } from "react";
import { ButtonsContainer, Container, Header, TopContainer, Form, Picker, Name, Text, Warn, BottomContainer } from './LoginStyled'
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import DropDownPicker from 'react-native-dropdown-picker';
import * as Yup from 'yup';
import { Alert } from "react-native";
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
    };

    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(4, 'Too Short!')
            .required('Required'),
        usermail: Yup.string().email('Invalid email').required('Required'),
    });

    const handleLogin = async (formValues) => {
        try {
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password)
            setUser(auth().currentUser)
        } catch (error) {
            console.log(error)
            Alert.alert(
                "Alert",
                "Sign In Failed"
            );
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
                    validationSchema={SignupSchema}
                >
                    {({ handleSubmit, values, handleChange, errors, touched, isValid, setFieldTouched }) => (
                        <Form>
                            <Input
                                placeholder="E-Mail"
                                onChangeText={handleChange('usermail')}
                                value={values.usermail}
                                onBlur={() => setFieldTouched('usermail')}
                            />
                            {touched.usermail && errors.usermail &&
                                <Warn>{errors.usermail}</Warn>
                            }
                            <Input
                                placeholder="Password"
                                onChangeText={handleChange('password')}
                                value={values.password}
                                isSecure={true}
                                onBlur={() => setFieldTouched('password')}
                            />
                            {touched.password && errors.password &&
                                <Warn>{errors.password}</Warn>
                            }
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
                                <Button title="Sign In" onPress={handleSubmit} secondary='#E82223' primary='#BBC3CF' textColor='white' borderColor='rgba(0, 0, 0, .0)' disabled={!(values.usermail !== '' && isValid === true)} />
                                <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} primary='#BBC3CF' secondary='#E82223' textColor='white' borderColor='rgba(0, 0, 0, .0)' disabled={false} />
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
                        <BottomContainer>
                            <Button title="Log Out" onPress={handleLogOut} primary='#BBC3CF' secondary='white' textColor='#E82223' borderColor='#E82223' disabled={false} />

                        </BottomContainer>
                </Container>
            )}

        </Container>
    );
};

export default Login;