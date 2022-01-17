import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import FavoriteScreen from './Screens/FavoriteScreen';
import CartScreen from './Screens/CartScreen';
import ProfileScreen from './Screens/ProfileScreen';
import DetailScreen from './Screens/DetailScreen'

import TabBar from './components/TabBar';
import { Button } from 'react-native';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#000"
                        />
                    )
                },
                    { title: 'Header!' }} />
            <HomeStack.Screen
                name="Detail"
                options={{
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#000"
                        />
                    ),
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#000"
                        />
                    ),
                }}
                component={DetailScreen} />
        </HomeStack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
            tabBar={props => <TabBar {...props} />}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigation;