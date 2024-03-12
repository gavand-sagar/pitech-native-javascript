import { View, Text, Pressable, Platform } from 'react-native'
import React from 'react'

const style = {
    'android': { flexDirection: 'row', backgroundColor: '#cc0000' },
    'ios': { flexDirection: 'row', backgroundColor: '#0000cc' }
}

export default function MyButton({ children, onPress }) {

    return (
        <Pressable onPress={onPress}>
            <View style={style[Platform.OS]}>
                <Text>{children}</Text>
            </View>
        </Pressable>
    )
}