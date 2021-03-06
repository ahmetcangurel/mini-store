import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import products from '../assets/data/products'

const PopularProducts = ({ navigation }) => {

    const DATA = products;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Popular Products</Text>

            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.product}
                        onPress={() => navigation.navigate('Detail', { item })}
                    >
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={item.image} />
                            <View style={styles.svg}>
                                {item.brand}
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.price} >{item.price}</Text>
                            <Text style={styles.model} numberOfLines={1} >{item.model}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default PopularProducts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 39,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    product: {
        flex: 1,
        marginTop: 25,
        justifyContent: 'space-between',
        //width: Dimensions.get('window').width / 2 - 4520,
        marginRight: 15,
    },
    imageContainer: {
        width: 140,
        height: 150,
        borderRadius: 25,
        backgroundColor: '#F6F6F6',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '85%',
        height: '85%',
    },
    svg: {
        position: 'absolute',
        bottom: 10,
        right: 13,
        opacity: 0.4,
    },
    textContainer: {
        marginTop: 20,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    model: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.4)',
        marginTop: 2,
    },

})
