import { View, Text, Button, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import { getProduct } from './productService';
import { useSelector } from 'react-redux';

export default function ProductList() {
    const value = useSelector(state=>state.counter.value)

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState('1');
    // useEffect(() => {
    //     fetchData();
    // }, [])
    const fetchData = () => {
        if (!isNaN(page)) {
            getProduct(page)
                .then(x => {
                    setProducts(x.data.products)
                })
        } else {
            Alert.alert("Error", "Invalid input");
        }

    }
    return (
        <View>

            <Text>ProductList</Text>
            <TextInput value={page} onChangeText={text => setPage(text)} placeholder='Number of products' />
            <Button onPress={fetchData} title='Get Data' />
            <Button onPress={() => {
                setPage((Number(page) + 1).toString());
                fetchData()
            }} title='Next Page' />
            {
                products.map(x => <ProductItem key={x.id} image={x.thumbnail} rating={x.rating} name={x.title} />)
            }

            <Text>{value}</Text>
        </View>
    )
}