import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function SideEffect() {

    useEffect(() => {
        // at the time of compoent creation
        // api call 
        return ()=>{
                // on destroy
                // cleanup
        }

    }, [])


    const[value,setValue] = useState('')
    const[message,setMessage] = useState('')


    useEffect(() => {
        // whenever the state changes
        if(!value){
            setMessage('Required')
        }
        if(value.length < 3){
            setMessage('Minlength is 3')
        }
        if(value.length > 30){
            setMessage('Maxlength is 30')
        }
    }, [value])


    return (
        <View>
            <TextInput placeholder='Write' value={value} onChangeText={t=>setValue(t)}/>
            <Text>{message}</Text>
        </View>
    )
}