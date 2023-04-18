import React from 'react';
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';
import Contacts1 from './../../screens/Contacts';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const ListItem = ({ contact, onPress }) => {
    const name = `${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`
    const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
    return (

        <TouchableHighlight
            onPress={onPress}
            underlayColor={colors.rowUnderlay}>
            <View style={styles.row}>
                <Image source={{ uri: contact.picture.thumbnail }}
                    style={styles.avatar}
                />
                <>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{contact.email}</Text>
                </>
                <>
                    <View style={styles.chevronContainer}>

                        {/* Icon Component */}
                        <Icon name={iconName} size={CHEVRON_SIZE} color={colors.subtleText} style={styles.chevron} />
                    </View>
                </>
            </View>
        </TouchableHighlight>
    )
}

export default ListItem;