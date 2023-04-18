import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

const Flex = () => {
    return (
        <View style={[styles.container, { flexDirection: 'column' }]}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 3, backgroundColor: 'green' }} />
        </View>
    );
};

export default Flex;