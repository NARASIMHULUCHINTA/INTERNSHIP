import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native'

//import Details from "./screens/Details";
//import Hello from "./screens/Hello";
//import Absoluteex from "./screens/Absoluteex";
//import Contacts from "./screens/Contacts";
//import { StyleSheetc } from './screens/StyleSheetc';
//import { StyleSheetc1 } from './screens/StyleSheetc1';
//import { HairLineWidthex } from './screens/HairLineWidthex';
//import { FlexDir } from './screens/FlexDir';
//import ContactScreen from './screens/ContactScreen';
//import ContactDetails from './screens/ContactDetails';
//import ContactListItem from './screens/ContactListItem';
//import Me from "./screens/Me";
//import ContactsStack from './config/router';
//import ReduxCounterApp from './screens/ReduxCounterApp';
//import ReduxStore from './screens/ReduxStore';
//import FunctionalComponent from './screens/FunctionalComponent';
import CarouselCards from './screens/CarouselCards';
const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <CarouselCards />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
});

export default App; 