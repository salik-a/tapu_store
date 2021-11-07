jest.mock('@react-native-firebase/auth', () => {
    return () => ({
        signInWithEmailAndPassword: jest.fn(),
        createUserWithEmailAndPassword: jest.fn(),
        signOut: jest.fn(),

    });
});
import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import SignUp from '../src/screens/sigup/SignUp';



test('should match with snapshot', () => {

    const comp = render(<SignUp />);
    expect(comp).toMatchSnapshot();
});

