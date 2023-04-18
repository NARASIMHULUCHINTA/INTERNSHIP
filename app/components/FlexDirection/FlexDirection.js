import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import styles from './styles';

const FlexDirectionBasics = () => {
    const [flexDirection, setflexDirection] = useState('column');
    return (
        <PreviewLayout
            label='flexDirection'
            values={['column', 'row', 'row-reverse', 'column-reverse']}
            selectedValue={flexDirection}
            setSelectionValue={setflexDirection}
        >
            <View
                style={[styles.box, { backgroundColor: 'powderblue' }]}
            />
            <View
                style={[styles.box, { backgroundColor: 'skyblue' }]}
            />
            <View
                style={[styles.box, { backgroundColor: 'steelblue' }]}
            />
        </PreviewLayout>
    )
}

const PreviewLayout = ({
    label, children, values, selectedValue, setSelectionValue,
}) => (
    <View style={{ padding: 10, flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
            {values.map(value => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectionValue(value)}
                    style={[styles.button, selectedValue === value && styles.selected]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
    </View>
);

export default FlexDirectionBasics;