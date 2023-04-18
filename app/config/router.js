import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StyleSheetc from '../screens/StyleSheetc';
import { FlexDir } from '../screens/FlexDir';
import Details from '../screens/Details';
import ContactListItem from '../screens/ContactListItem';
import Me from '../screens/Me';
import Newcontact from '../screens/Newcontact';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="StyleSheetc"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="StyleSheetc"
                component={StyleSheetc}
            />
        </Stack.Navigator>
    );
}

const SecondScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="FlexDir"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="FlexDir"
                component={FlexDir} />
            <Stack.Screen
                name="Details"
                component={Details} />
        </Stack.Navigator>
    );
}

const ThirdScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Me"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Me"
                component={Me}
            />
        </Stack.Navigator>
    );
}

const FourthScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Newcontact"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Newcontact"
                component={Newcontact}
            />
        </Stack.Navigator>
    );
}

/*function TabStack() {
    return (
        <Tab.Navigator
        >
            <Tab.Screen
                name="Contacts"
                component={ContactListItem}
                options={{
                    tabBarLabel: 'Contacts',

                }} />
            <Tab.Screen
                name="flexDir"
                component={FlexDir}
                options={{
                    tabBarLabel: 'FlexDir',
                }} />
            <Tab.Screen
                name="StyleSheetc"
                component={StyleSheetc}
                options={{
                    tabBarLabel: 'StyleSheetc',
                }} />
        </Tab.Navigator>
    );
}*/



function ContactsStack() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
            >
                <Drawer.Screen
                    name="StyleSheetc"

                    component={FirstScreenStack} />
                <Drawer.Screen
                    name="FlexDir"

                    component={SecondScreenStack} />
                <Drawer.Screen
                    name="Me"

                    component={ThirdScreenStack} />
                <Drawer.Screen
                    name="Newcontact"

                    component={FourthScreenStack} />
            </Drawer.Navigator>
        </NavigationContainer >
    );
}






export default ContactsStack;