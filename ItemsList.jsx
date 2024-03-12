import { View, Text } from 'react-native'
import React from 'react'

export default function ItemsList({array}) {
  return (
    <View>
      {array.map(x => <Text key={x}>{x}</Text>)}
    </View>
  )
}