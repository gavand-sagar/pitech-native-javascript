import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function Counter(props) {
    const [value, setValue] = useState(0);
    const hadleClick = ()=>{
        setValue(value+1)
        props.onChange(value+1)
    }
    return (
        <View>
            <Text>CHILD - {value}</Text>
            <Button onPress={hadleClick} title='INCREMENT'></Button>
        </View>
    )
}