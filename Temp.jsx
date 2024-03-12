import { View, Text, StyleSheet, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerAndroid from '@react-native-community/datetimepicker'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'orange',
        flexWrap: 'wrap',
        gap: 10,
        padding: 10,
        borderRadius: 30,
    }
})

export default function Temp() {
    const [state, setState] = useState();
    const handleClick = ()=>{
        
    }
    return (
        <View style={styles.container}>
            <View>
                <Button color={'red'} onPress={() => setState(true)} title='TOGGLE'></Button>
            </View>
            <View>
                <Modal visible={state} animationType='slide'>
                    <Button onPress={() => setState(false)} title='TOGGLE'></Button>
                    <Text>Temp</Text>
                    <Text>Temp</Text>
                    <Text>Temp</Text>
                    <Text>Temp</Text>
                    <Text>Temp</Text>
                    <DateTimePickerAndroid onch value={new Date()}/>
                </Modal>
            </View>

        </View>
    )
}

