import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HookCounter from '../components/HookCounter';
import HookCounterTwo from '../components/HookCounterTwo';
import HookCounterFour from './../components/HookCounterFour';
export class Hello extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Hello World</Text>
                <HookCounter />
                <HookCounterTwo />
                <HookCounterFour />
            </View>
        )
    }
}

export default Hello