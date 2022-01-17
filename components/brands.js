import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Adidas, Jordan, Nike, Puma } from './icons'

const Brands = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Brands!</Text>
            <View style={styles.brands}>
                <TouchableOpacity style={styles.brand}>
                    <Nike />
                </TouchableOpacity>
                <TouchableOpacity style={styles.brand}>
                    <Adidas />
                </TouchableOpacity>
                <TouchableOpacity style={styles.brand}>
                    <Puma />
                </TouchableOpacity>
                <TouchableOpacity style={styles.brand}>
                    <Jordan />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Brands

const styles = StyleSheet.create({
    container: {
        marginTop: 27
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 17
    },
    brand: {
        backgroundColor: '#eee',
        width: 55,
        height: 55,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 28,
    },
    brands: {
        flexDirection: 'row',
    }
})
