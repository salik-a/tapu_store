import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import Input from '../src/components/input/Input';
test('should match with snapshot', () => {

    const comp = render(<Input />);
    expect(comp).toMatchSnapshot();
});

