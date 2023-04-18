import React, { useState } from "react";
import { Button, Text, View, TextInput } from "react-native";

function HookCounterThree() {
    const [name, setName] = useState({ firstname: '', lastname: '' })
    return (
        <View>
            <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                value={name.firstname}
                type='text'
                onChange={e => setName({ ...name, firstname: e.target.value })}
            />
            <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                value={name.lastname}
                type='text'
                onChange={e => setName({ ...name, lastname: e.target.value })}
            />
            <Text>Your first name is - {name.firstname}</Text>
            <Text>Your last name is - {name.lastname}</Text>
            <Text>{JSON.stringify(name)}</Text>
        </View>
    )
}

export default HookCounterThree;