import React, { useState } from 'react'
import { View, Text, ScrollView, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

import products from '../assets/data/products'

const DetailScreen = ({item}) => {
    const data = products[0]

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: '39', value: '39' },
        { label: '40', value: '40' },
        { label: '41', value: '41' },
        { label: '42', value: '42' },
        { label: '43', value: '43' },
        { label: '44', value: '44' },
    ])

    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={data.image} />
                    <View style={styles.logo}>
                        {data.brand}
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.model}>{data.model}</Text>
                    <Text style={styles.price}>$ {data.price}</Text>
                    <Text style={styles.summary}>{data.summary}</Text>
                </View>
                <View style={styles.config}>
                    <View style={styles.colors}>
                        <View style={styles.color}></View>
                        <View style={styles.color}></View>
                        <View style={styles.color}></View>
                        <View style={styles.color}></View>
                    </View>
                    <View>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={styles.sizes}
                            placeholder="Choose size"
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => alert('item added')} style={styless.button}>
                    <Text style={styless.buttonText}>Add to bag</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    imageWrapper: {
        paddingHorizontal: 40,
        paddingVertical: 50,
        backgroundColor: '#eee',
        marginHorizontal: 7,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 20,
    },
    image: {
        width: 281,
        height: 308
    },
    logo: {
        opacity: 0.2,
        position: 'absolute',
        zIndex: -1
    },
    info: {
        marginHorizontal: 34,
        marginVertical: 24,
    },
    model: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 0.6,
        marginTop: 12,
    },
    summary: {
        fontSize: 15,
        fontWeight: '600',
        opacity: 0.4,
        lineHeight: 20,
        marginTop: 18
    },
    config: {
        marginHorizontal: 34,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    colors: {
        flexDirection: 'row',
    },
    color: {
        width: 24,
        height: 24,
        borderRadius: 24,
        backgroundColor: '#33c',
        marginHorizontal: 6,
    },
    sizes: {
        backgroundColor: "#eee",
        width: 134,
        height: 34,
        borderWidth: 0,
    },

})

const styless = StyleSheet.create({
    button: {
        paddingVertical: 25,
        backgroundColor: '#000',
        marginHorizontal: 34,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    }
})