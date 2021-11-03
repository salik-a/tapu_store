import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login screen</Text>
            <Button
                title="Go to SignUp"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
}