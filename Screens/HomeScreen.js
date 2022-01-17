import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../components/header'
import Search from '../components/search'
import Brands from '../components/brands'
import PopularProducts from '../components/popularProducts'

const HomeScreen = (props) => {

    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Header />
            <Search />
            <Brands />
            <PopularProducts />
            {/* <Button title='Product' onPress={() => navigation.navigate('Detail')} /> */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 36,
        paddingTop: 40,
        backgroundColor: '#fff',
        flex: 1,
    }
})