import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { SearchIcon } from './icons'

const Search = () => {
    return (
        <View style={styles.search}>
            <TextInput
                placeholder='Search'
                style={styles.input}
            />
            <SearchIcon style={styles.icon} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    search: {
        marginTop: 27
    },
    input: {
        backgroundColor: '#eee',
        height: 50,
        borderRadius: 15,
        fontSize: 18,
        fontWeight: '500',
        paddingLeft: 50
    },
    icon: {
        position: 'absolute',
        marginTop: 15,
        marginLeft: 15,
    }
})
