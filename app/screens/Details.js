import React, { Component, useState } from "react";
import { View } from 'react-native';

import { Header } from "../components/UserDetails";
import colors from "../config/colors";

export class Details extends Component {
    render() {

        const contact = this.props.navigation.this.state?.params;

        return (
            <View style={{ backgroundColor: colors.background }}>
                <Header />
            </View>
        )
    }
}

export default Details;