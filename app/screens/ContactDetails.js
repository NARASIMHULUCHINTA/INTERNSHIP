import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { contacts } from '../config/data';
import colors from '../config/colors';

class Contacts1 extends Component {
    render() {
        return (
            <FlatList
                style={{ backgroundColor: colors.background }}
                data={contacts}
                renderItem={({ item }) => <View><Text>{item.email}</Text></View>}
                keyExtractor={(item) => item.email}
            />
        );
    }
}

export default Contacts1;

