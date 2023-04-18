import { View, Text } from 'react-native'
import React from 'react'
import FunctionalComponentEx from '../components/FunctionalComponentEx'
import FunctionalComponentEx1 from '../components/FunctionalComponentEx1'
import FunctionalComponentEx2 from '../components/FunctionalComponentEx2'


const FunctionalComponent = () => {
    return (
        <View>
            <FunctionalComponentEx />
            <FunctionalComponentEx1 />
            <FunctionalComponentEx2 />
        </View>
    )
}

export default FunctionalComponent