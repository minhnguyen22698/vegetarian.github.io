import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';

class News extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={styles.container} > 
                <Text>News</Text>
            </View>
        )
    }
}

export default News

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
}
)