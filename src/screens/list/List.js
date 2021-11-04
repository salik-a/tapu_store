import React from 'react';
import { Text, View } from 'react-native';
import ProductCard from '../../components/productCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from "react-redux";
import { Container, List } from './ListStyle';
import TotalCard from '../../components/totalCard/TotalCard';

const ListScreen = () => {

    const idList = useSelector(selector => selector.basket);
    const dispatch = useDispatch()

    //when the page opens, we pull the data from the url address
    const { error, loading, data } = useFetch("https://61827de284c2020017d89eba.mockapi.io/tapu/products")

    // loading part is displayed while loading data
    if (loading) {
        return (
            <View>
                <Text>loading</Text>
            </View>
        )
    }

    //Error part is shown when data cannot be loaded
    if (error) {
        return (
            <View>
                <Text>error</Text>
            </View>
        )
    };


    //Clicking on the character redirects to the character detail page
    function handlePress(item) {
        const id = item.id;
        const price = item.price;
        if (idList.includes(id)) {
            dispatch({ type: "REMOVE_BASKET", payload: { basket: id } })
            dispatch({ type: "REMOVE_PRICE", payload: { price: price } })

        } else {
            dispatch({ type: "ADD_PRICE", payload: { price } })
            dispatch({ type: "ADD_BASKET", payload: { id } })
        }
    }

    // charactercard is used to display each character
    const renderItem = ({ item }) => (
        <ProductCard data={item} onPress={() => handlePress(item)} idList={idList} />
    );

    return (
        <Container>
            <List
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <TotalCard />

        </Container>
    )
}

export default ListScreen;