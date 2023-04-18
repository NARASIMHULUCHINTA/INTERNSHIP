import React, { useState } from "react";
import { Button, Text, View } from "react-native";

function HookCounterTwo() {
    const initalCount = 0
    const [count, setCount] = useState(initalCount);
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }

    }
    return (
        <View>
            <Button onPress={() => setCount(initalCount)} title="RESET" />
            <Button onPress={() => setCount(count + 1)} title="Increment" />
            <Button onPress={() => setCount(count - 1)} title="decrement" />
            <Button onPress={incrementFive} title='increment 5' />
            <Text>Count one:-{count}</Text>
        </View>
    )
}

export default HookCounterTwo;