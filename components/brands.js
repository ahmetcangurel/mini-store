import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Adidas, Jordan, Nike, Puma } from './icons'
import { SvgUri } from 'react-native-svg'

import brands from '../assets/data/brands'

const Brands = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Brands!</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {brands.map(brand => (
                    <TouchableOpacity key={brand.id} style={styles.brand}>
                        {/* Marka Logoları Gelecek! (svgUri olmadı!) */}
                    </TouchableOpacity>
                ))}
            </ScrollView>
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
