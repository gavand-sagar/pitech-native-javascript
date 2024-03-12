
import { useEffect, useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
export default function Rating({ value,noIncrememnt }) {

    const [local, setLocal] = useState(value);

    useEffect(()=>{
        setLocal(value)
    },[value])

    let str = ""
    for (let index = 0; index < local; index++) {
        str += "❤️"
    }

    return (
        <View style={{width:100,justifyContent:'center',flexDirection:'row'}}s>
            <Text>{str}</Text>
            {noIncrememnt || <Button onPress={() => setLocal(local + 1)} title='+'></Button>}
        </View>
    )
}