import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import Provider from "../src/context/provider"

import TotalCard from '../src/components/totalCard/TotalCard';
test('should match with snapshot', () => {

    const rendered = render(
        <Provider><TotalCard /></Provider>
    );
    expect(rendered).toMatchSnapshot();
});
