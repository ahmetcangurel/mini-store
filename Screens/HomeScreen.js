import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

const HomeScreen = (props) => {

    const { navigation } = props;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text>Hello Home 3</Text>
            <Button title='Product' onPress={() => navigation.navigate('Detail')} />
        </View>
    )
}

export default HomeScreen
