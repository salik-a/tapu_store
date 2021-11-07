import React, { useState, useEffect } from "react";
import { ButtonsContainer, Container, Header, TopContainer, Form, Picker, Name, Text, Warn, BottomContainer } from './LoginStyled'
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import DropDownPicker from 'react-native-dropdown-picker';
import * as Yup from 'yup';
import { Alert } from "react-native";


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


export default class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            value: "TR",
            open: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.setValue = this.setValue.bind(this);

    }

    setValue(callback) {
        this.setState(state => ({
            value: callback(state.value)
        }));
    }

    async handleLogin(formValues) {
        try {
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password)
            this.setState({ user: auth().currentUser })

        } catch (error) {
            console.log(error)
            Alert.alert(
                "Alert",
                "Sign In Failed"
            );
        }
    }
    async handleLogOut() {
        try {
            await auth().signOut()
            console.log("signed out");
            this.setState({ user: null })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
    return (
        <Container >
            <TopContainer>
                <Header>Account</Header>
            </TopContainer>

            {this.state.user === null ? (
                <Formik
                    initialValues={initialForm}
                    onSubmit={values => this.handleLogin(values)}
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
                                    open={this.state.open}
                                    value={this.state.value}
                                    items={items}
                                    setOpen={() => this.setState({ open: !this.state.open })}
                                    setValue={this.setValue}

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
                                <Button testID="signin-button" title="Sign In" onPress={handleSubmit} secondary='#E82223' primary='#BBC3CF' textColor='white' borderColor='rgba(0, 0, 0, .0)' disabled={!(values.usermail !== '' && isValid === true)} />
                                <Button testID="signup-button" title="Sign Up" onPress={() => this.props.navigation.navigate("SignUp")} primary='#BBC3CF' secondary='#E82223' textColor='white' borderColor='rgba(0, 0, 0, .0)' disabled={false} />
                            </ButtonsContainer>
                        </Form>
                    )}
                </Formik>
            ) : (
                <Container>
                    <TopContainer>
                            <Name>{this.state.user != null ? this.state.user.displayName : "test test"}</Name>
                            <Text>E-mail: {this.state.user != null ? this.state.user.email : "test@gmail.com"}</Text>
                            <Text>Password: ******</Text>
                            <Text>Current locale: {this.state.value} </Text>
                    </TopContainer>
                    <Picker>
                        <DropDownPicker
                                open={this.state.open}
                                value={this.state.value}
                                items={items}
                                setOpen={() => this.setState({ open: !this.state.open })}
                                setValue={this.setValue}

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
                            <Button testID="logout-button" title="Log Out" onPress={this.handleLogOut} primary='#BBC3CF' secondary='white' textColor='#E82223' borderColor='#E82223' disabled={false} />

                        </BottomContainer>
                </Container>
            )}

        </Container>
    );
    }
};

