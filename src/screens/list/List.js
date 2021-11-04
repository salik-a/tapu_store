import React from 'react';
import { Text, View } from 'react-native';
import ProductCard from '../../components/productCard/ProductCard';
import styles from "./ListStyle"
import useFetch from '../../hooks/useFetch';

const ListScreen = () => {
    return (
        <View style={styles.container}>
            <Text>List screen</Text>
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </View>
    );
};

export default ListScreen;