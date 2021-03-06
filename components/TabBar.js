import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Heart, Home, Profile, Shop } from './icons'

function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return (
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        {label === 'Home' && <Home style={isFocused ? { color: '#000' } : { color: '#D6D6D6' }} />}
                        {label === 'Favorite' && <Heart style={isFocused ? { color: '#000' } : { color: '#D6D6D6' }} />}
                        {label === 'Cart' && <Shop style={isFocused ? { color: '#000' } : { color: '#D6D6D6' }} />}
                        {label === 'Profile' && <Profile style={isFocused ? { color: '#000' } : { color: '#D6D6D6' }} />}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default TabBar

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 62
    }
})