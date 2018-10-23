import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export class App extends Component{
    constructor(props : any) {
        super(props)
    }

    render() {
        return (
            <View>
                {"Hello World"}
            </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
