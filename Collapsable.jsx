import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function Collapsable({heading,children}) {
    const[expand,setExpand] = useState(true)
  return (
    <View style={{borderWidth:5,borderColor:'gray',padding:10,flexDirection:'column',gap:20,margin:10}}>
      <Text onPress={()=>{setExpand(!expand)}} style={{borderBottomColor:'red',borderBottomWidth:5}}>{heading}</Text>
      { expand && children}
    </View>
  )
}