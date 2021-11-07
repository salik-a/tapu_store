import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import Button from "../src/components/button/Button"
test('should match with snapshot', () => {
    const comp = render(<Button primary='#BBC3CF' secondary='#E82223' textColor='white' borderColor='rgba(0, 0, 0, .0)' />);
    expect(comp).toMatchSnapshot();
});

test("should render title correctly", () => {
    const testTitle = "test";
    const comp = render(<Button title={testTitle} primary='#BBC3CF' secondary='#E82223' textColor='white' borderColor='rgba(0, 0, 0, .0)' />)

    const buttonText = comp.getByTestId("button-title").children[0]
    expect(buttonText).toBe(testTitle)


});

test("should trigger onPress", () => {
    const mockFunction = jest.fn()
    const comp = render(<Button onPress={mockFunction} primary='#BBC3CF' secondary='#E82223' textColor='white' borderColor='rgba(0, 0, 0, .0)' />)

    const buttonTouchable = comp.getByTestId("button-touchable")
    fireEvent(buttonTouchable, "press")

    expect(mockFunction).toBeCalled()
})

test("can't press button if disabled true", () => {
    const mockFunction = jest.fn()
    const comp = render(<Button onPress={mockFunction} primary='#BBC3CF' secondary='#E82223' textColor='white' borderColor='rgba(0, 0, 0, .0)' disabled={true} />)
    const buttonTouchable = comp.getByTestId("button-touchable")
    fireEvent(buttonTouchable, "press")
    expect(mockFunction).toBeCalledTimes(0)
})

