import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';

import { //incrementvalueAction, decrementvalueAction
    incrementdecrementvalueAction
} from '../Redux/Action/Counter/CounterActions';

export default function ReduxControl({ }) {
    const dispatch = useDispatch();
    const incrementValue = () => {
        //dispatch(incrementvalueAction());
        dispatch(incrementdecrementvalueAction("increment"));
    };
    const decrementValue = () => {
        //dispatch(decrementvalueAction());
        dispatch(incrementdecrementvalueAction("decrement"));
    };
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '70%'
        }}>
            <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10 }} onPress={() => decrementValue()}>
                <Text style={{ fontSize: 20, color: 'white' }}>Decrement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10 }} onPress={() => incrementValue()}>
                <Text style={{ fontSize: 20, color: 'white' }}>increment</Text>

            </TouchableOpacity>
        </View>
    )
}