import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../components/AbsoluteFill';
import { StyleSheet } from 'react-native';
export class Absoluteex extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box1}>
                    <Text style={styles.text}>1</Text>
                </View>
                <View style={[styles.box2, StyleSheet.absoluteFill]}>
                    <Text style={styles.text}>2</Text>
                </View>
                <View style={styles.box3}>
                    <Text style={styles.text}>3</Text>
                </View>
            </View>
        );
    }
}

export default Absoluteex;