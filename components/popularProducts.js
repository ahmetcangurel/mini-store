import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PopularProducts = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Popular</Text>
        </View>
    )
}

export default PopularProducts

const styles = StyleSheet.create({
    container: {
        marginTop: 39,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})
