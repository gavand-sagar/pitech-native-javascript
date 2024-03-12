import { View, Text } from 'react-native'
import React from 'react'

export default function Ribben({ left, right }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}>
            {left}
            {right}
        </View>
    )
}