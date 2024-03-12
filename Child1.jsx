import { View, Text } from 'react-native'
import React from 'react'
import Child2 from './Child2'

export default function Child1() {
  return (
    <View>
      <Text>Child1</Text>
      <Child2/>
    </View>
  )
}