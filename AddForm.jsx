import { View, Text, TextInput,Button } from 'react-native'
import React,{useState} from 'react'

export default function AddForm({onSave}) {
    let [input1, setInput1] = useState('');
    let [validation, setValidation] = useState('');

    function hadleClick() {

        if (!input1) {
            setValidation("Required.")
        } else {
            setValidation("")
            onSave(input1)
        }
    }
    return (
        <View>
            <Text>Write sometihng here</Text>
            <TextInput placeholder='Write someting' value={input1} onChangeText={v => setInput1(v)} />
            <Text>{validation}</Text>
            <Button onPress={hadleClick} title='Save'></Button>
        </View>
    )
}