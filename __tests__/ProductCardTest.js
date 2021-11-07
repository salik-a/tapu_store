import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import ProductCard from '../src/components/productCard/ProductCard';
test('should match with snapshot', () => {

    const data = {
        "title": "Villa Bosphorus",
        "image": "https://lh5.googleusercontent.com/-NUVFE9PlpeM/TWu1toPnthI/AAAAAAAAAAc/Rzj59I3aZj4/s320/villa+foto%25C4%259Fraflar%25C4%25B1.jpg",
        "star": 4,
        "distance": 81,
        "detail": "If you are looking for a bright and comfortable villa you found a right place.",
        "id": "1",
        "price": 100
    }
    const idList = ["1"]
    const comp = render(<ProductCard data={data} idList={idList} />);
    expect(comp).toMatchSnapshot();
});

test('should trigger sepete ekle button onPress', () => {

    const data = {
        "title": "Villa Bosphorus",
        "image": "https://lh5.googleusercontent.com/-NUVFE9PlpeM/TWu1toPnthI/AAAAAAAAAAc/Rzj59I3aZj4/s320/villa+foto%25C4%259Fraflar%25C4%25B1.jpg",
        "star": 4,
        "distance": 81,
        "detail": "If you are looking for a bright and comfortable villa you found a right place.",
        "id": "1",
        "price": 100
    }
    const idList = ["1"]
    const mockFunction = jest.fn()
    const comp = render(<ProductCard data={data} idList={idList} onPress={mockFunction} />);
    const button = comp.getByTestId("sepete-ekle")
    fireEvent(button, "press")
    expect(mockFunction).toBeCalledTimes(1)
});

