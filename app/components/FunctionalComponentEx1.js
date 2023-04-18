import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FunctionalComponentEx1 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Functional Component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#806B33',
    },
    headerText: {
        color: "#ffffff",
        fontSize: 20,
    },
});

export default FunctionalComponentEx1