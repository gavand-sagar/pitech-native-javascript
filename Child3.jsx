import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice'

export default function Child3() {
    const value = useSelector(state=>state.counter.value)

    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(increment())
    }
    return (
        <View>
            <Text>Child3</Text>
            <Button title='INC' onPress={handleClick}/>
            <Text>{value}</Text>
        </View>
    )
}