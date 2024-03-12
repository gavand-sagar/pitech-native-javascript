import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CallToApi() {

    const [fact, setFact] = useState('')

    const [isLoading, setLoading] = useState(false)


    const getData = () => {
        setLoading(true)
        axios.get("http://catfact.ninja/fact")
            .then(x => {
                //sometime in the future
                setFact(x.data.fact)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return (
        <View>
            <Button disabled={isLoading} onPress={getData} title='Get Data' />
            <Text>CallToApi</Text>
            {
                isLoading ?
                    <Text>LOADING...</Text>
                    : <Text>{fact}</Text>
            }
        </View>
    )
}