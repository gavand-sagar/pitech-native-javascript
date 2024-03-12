import { View, Text } from 'react-native'
import React from 'react'
import Child3 from './Child3'

export default function Child2() {
  return (
    <View>
      <Text>Child2</Text>
      <Child3/>
    </View>
  )
}