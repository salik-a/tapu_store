import React from 'react';
import 'react-native';
import App from '../src/App';
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { TestScheduler } from '@jest/core';


test("should match with snapshot", () => {
  const comp = render(<App />)
  expect(comp).toMatchSnapshot();

});