import React, { useState } from "react";
import { Button, Text, View } from "react-native";

function HookCounter() {
    const [count, setCount] = useState(0);
    const handleButtonClickListener = () => {
        console.log('Click Me Button Clicked')
        setCount(val => val + 1)

    }
    return (
        <View>
            <Button onPress={handleButtonClickListener} title='Click Me' />
            <Text>Count one:-{count}</Text>
        </View>
    )
}

export default HookCounter;