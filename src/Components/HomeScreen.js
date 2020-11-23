import React, { Component } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet,View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NewsScreen from './Screens/News'
import Icons from 'react-native-vector-icons/dist/Ionicons'
import ProfileScreen from './Screens/Profile'
import { BottomNavigation } from 'react-native-paper'

const Tab = createMaterialBottomTabNavigator()

class HomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            routes: [
                { key: 'news', title: 'NEWS', icon: 'newspaper-outline', color: '#6453AB ' },
                { key: 'profile', title: 'PROFILE', icon: 'body-outline', color: '#3BA166' },
            ],
        }
    }
    render() {
        return (
            <Tab.Navigator initialRouteName="Profile"
            shifting={true}
            sceneAnimationEnabled={true}>
                <Tab.Screen
                    name="News" component={NewsScreen}
                    options={{
                        tabBarColor:'#6453AB',
                        tabBarLabel: 'news',
                        tabBarIcon: ({ color, size }) => (
                            <Icons name="newspaper-outline" color={'#ffffff'} size={26} />
                        )
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarColor:'#3BA166',
                        tabBarLabel: 'profile ',
                        tabBarIcon: ({ color, size }) => (
                            <Icons name="body-outline" color={'#ffffff'} size={26} />
                        )
                    }}
                />  
            </Tab.Navigator>
        )
    }
}

export default HomeScreen

const S = StyleSheet.create({

})
