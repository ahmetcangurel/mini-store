import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

const HomeScreen = (props) => {

    const { navigation } = props;

    return (
        <SafeAreaView>
            <Text>Hello  Home 3</Text>
            <Button title='Product' onPress={() => navigation.navigate('Detail')} />
        </SafeAreaView>
    )
}

export default HomeScreen
