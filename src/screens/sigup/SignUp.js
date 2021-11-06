import React, { useState } from "react";
import { ButtonsContainer, Container, Header, TopContainer, Form, Picker, Name, Text, Warn } from './SignUpStyled'
import { Alert } from "react-native";
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import DropDownPicker from 'react-native-dropdown-picker';
import * as Yup from 'yup';


const items = [
    { label: 'Türkçe', value: 'TR' },
    { label: 'English', value: 'EN' }
];

const initialForm = {
    usermail: "",
    password: "",
    username: ""
}

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(4, 'Too Short!')
        .required('Required'),
    usermail: Yup.string()
        .email('Invalid email')
        .required('Required'),
    username: Yup.string()
        .min(3, 'Too Short!')
        .required('Required'),
});
export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            value: "TR",
            open: false
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    setValue(callback) {
        this.setState(state => ({
            value: callback(state.value)
        }));
    }





    async handleLogin(formValues) {
        console.log("formvalues", formValues)
        try {

            await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password)
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password)
            const update = {
                displayName: formValues.username,
            };
            await auth().currentUser.updateProfile(update);
            this.props.navigation.navigate("Login")

        } catch (error) {
            console.log(error)
            Alert.alert(
                "Alert",
                "Sign Up Failed"
            );
        }
    }

    render() {
        return (
            <Container >
                <TopContainer>
                    <Header>Account</Header>
                </TopContainer>


                <Formik
                    initialValues={initialForm}
                    onSubmit={formValues => this.handleLogin(formValues)}
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
                            <Input
                                placeholder="Username"
                                onChangeText={handleChange('username')}
                                value={values.username}
                                onBlur={() => setFieldTouched('username')}
                            />
                            {touched.username && errors.username &&
                                <Warn>{errors.username}</Warn>
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
                                <Button title="Sign Up" onPress={handleSubmit} secondary='#E82223' primary='#BBC3CF' textColor='white' borderColor='#E82223' borderColor='rgba(0, 0, 0, .0)' disabled={!(values.usermail !== '' && isValid === true)} />
                            </ButtonsContainer>
                        </Form>
                    )}
                </Formik>

            </Container>
        );
    }
};

