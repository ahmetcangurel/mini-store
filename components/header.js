import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Notification } from './icons'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Sneakrs</Text>
            <TouchableOpacity onPress={() => alert('Bildirimler!')} >
                <Notification />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})