import React, { Component, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import Redux from '../components/Redux';
import ReduxControl from '../components/ReduxControl';
import CounterCustomSet from '../components/CounterCustomSet';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomvalueAction } from '../Redux/Action/Counter/CounterActions';


export default function ReduxCounterApp() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    //console.log(counter)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Redux counterValue={counter.count} />
            <ReduxControl />
            <TextInput
                value={counter.changeValue}
                style={{ borderWidth: 1, width: "80%", marginTop: 30 }}
                onChangeText={text => dispatch(setCustomvalueAction(text))}
            />
        </View>
    )
}