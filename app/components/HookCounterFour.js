import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const HookCounterFour = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCount(count + 1);
        }, 3000);
    })

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Text style={{ fontSize: 50 }}>
                Count is incremented {count} times
            </Text>
        </View>
    );
}

export default HookCounterFour;