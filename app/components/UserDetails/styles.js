import { StyleSheet, Dimensions } from "react-native";

import colors from '../../config/colors';

const window = Dimensions.get('window');

export const ICON_SIZE = 20;
export default StyleSheet.create({
    image: {
        width: window.width / 2,
        height: window.width / 2,
        borderRadius: window.width / 4,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 28,
    },
    name: {
        fontSize: 22,
        marginTop: 10,
        color: colors.primaryText,
    },
    actionContainer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.border,
        borderBottomColor: colors.border,
        paddingVertical: 15,
        backgroundColor: colors.grayBackground,
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    actionInfo: {
        flexDirection: 'column',
    },
    actionLabel: {
        fontSize: 12,
        color: colors.subtleText,
        marginBottom: 3,
    },
    actionBody: {
        fontSize: 16,
        color: colors.primaryText,
        marginBottom: 5,
    },
    actionIcons: {
        marginLeft: 13,
    },
    actionTouch: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    infoContainer: {
        paddingVertical: 15,
    }
});

