import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Profile extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={styles.container} > 
                <Text>Profile </Text>
            </View>
        )
    }
}

export default Profile

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
}
)