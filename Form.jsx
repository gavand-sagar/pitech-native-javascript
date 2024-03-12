import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import ItemsList from './ItemsList';
import AddForm from './AddForm';

export default function Form() {

    let [array, setArray] = useState(["ABC", "PQR"]);
    function addData(item) {
        setArray([...array, item])
    }
    return (
        <View style={styles.container}>
            <AddForm onSave={addData}/>
            <ItemsList array={array} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});