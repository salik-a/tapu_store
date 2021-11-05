import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from './SignUpStyle'
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"


const Sign = ({ navigation }) => {

    const initialForm = {
        usermail: "",
        password: "",
        passwordRepeat: ""
    }
    const handleSign = async (formValues) => {
        if (formValues.password !== formValues.passwordRepeat) {

        } else {

            try {
                await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
                console.log("formValues", formValues);

            } catch (error) {

                console.log("error", error)
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Formik
                initialValues={initialForm}
                onSubmit={values => handleSign(values)}
            >

                {({ handleChange, handleSubmit, values }) => (
                    <>
                        <Input
                            placeholder="E-Postanızı Giriniz"
                            onChangeText={handleChange('usermail')}
                            value={values.usermail}
                        />
                        <Input
                            placeholder="Şifrenizi Giriniz"
                            onChangeText={handleChange('password')}
                            value={values.password}
                            isSecure={true}
                        />
                        <Input
                            placeholder="Şifrenizi  Tekrar Giriniz"
                            onChangeText={handleChange('passwordRepeat')}
                            value={values.passwordRepeat}
                            isSecure={true}
                        />
                        <View style={styles.buttons}>
                            <Button title="Kayıt Ol" bgColor='papayawhip' onPress={handleSubmit} />
                            <Button title="Geri" bgColor='papayawhip' onPress={() => navigation.goBack()} />
                        </View>
                    </>
                )

                }
            </Formik>

        </SafeAreaView>
    );
};

export default Sign;
