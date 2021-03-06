import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './LoginHome'
import HomeScreen from './HomeScreen'
import Registry from './Registry';
import { NavigationContainer } from '@react-navigation/native';
import Forgot from './Forgotpassword';

const Stack = createStackNavigator();



class Nav extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <NavigationContainer>
            <Stack.Navigator mode="modal" headerMode='none'>
                <Stack.Screen name="login"
                   options={{
                       headerShown: false
                   }}
                    component={Login} />
                <Stack.Screen name="registry"
                options={{
                    headerStyle: { 
                        backgroundColor: '#20ACF9'
                    }
                }}
                 component={Registry}/>
                 <Stack.Screen name="Home Screen" 
                 options={{
                     headerStyle: {
                        backgroundColor: '#20ACF9'
                      }
                 }}
                 component={HomeScreen}/>
                 <Stack.Screen name="forgotpassword" 
                 options={{
                     headerStyle: {
                        backgroundColor: '#20ACF9'
                      }
                 }}
                 component={Forgot}/>
            </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default Nav