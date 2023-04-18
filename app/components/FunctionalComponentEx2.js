import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const FunctionalComponentEx2 = () => {
    const [value, setValue] = useState(1);
    setValue
    return (
        <View>
            <Text style={{ padding: 30, fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlign: 'center' }}>{value}</Text>
            <Button onPress={() => setValue(value + 1)} title='Click Me' ></Button>
        </View>
    )
}

export default FunctionalComponentEx2