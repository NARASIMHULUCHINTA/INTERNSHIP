import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'


export default function CounterCustomSet({ setCustomValueParentState }) {
    const [customValue, setcustomValue] = useState("1");
    const applyChangesInState = (text) => {
        setcustomValue(text);
        setCustomValueParentState(text);
    }
    return (
        <View style={{ flex: 1, paddingTop: 50, alignItems: 'center' }}>
            <TextInput value={customValue} style={{ borderWidth: 1, width: '100%' }} onChangeText={(text) => applyChangesInState(text)} />
        </View>
    )
}