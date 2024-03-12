import { Alert, Button, Image, ImageBackground, Modal, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import SideEffect from './SideEffect';
import Rating from './Rating';
import { useState } from 'react';
export default function SongItem({rating,name}) {
    return (
        <View style={styles.songItem}>
            <Image height={80} width={80} source={{
                uri: 'https://fastly.picsum.photos/id/265/200/300.jpg?hmac=NX0ut-ylHFyYKa4TxhZFNElh-h6RcVV7P4PNPgeBxKk'
            }}></Image>
            <Text style={{color:'white',width:100}}>{name}</Text>
            <Rating noIncrememnt={true} value={rating} />
        </View>
    )
}


const styles = StyleSheet.create({
    songItem: {
        height: 100,
        backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-between', // vertical
        alignItems: 'center',
        width: '100%',
        padding: 20,
        margin:5
    }
});
