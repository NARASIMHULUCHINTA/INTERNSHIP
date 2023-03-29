import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const HairLineWidth = () => {

    return (
        <View style={styles.container}
        >
            <Text style={styles.row}>React</Text>
            <Text style={styles.row}>Native</Text>
        </View>
    )
}

export default HairLineWidth;