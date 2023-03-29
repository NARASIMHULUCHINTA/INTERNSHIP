import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export const CHEVRON_SIZE = 25;
export default StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: 600,
        colors: colors.primaryText,
    },
    email: {
        fontSize: 13,
        color: colors.subtleText,
    },
    chevronContainer: {
        backgroundColor: 'red',
        flex: 1,
    },
    chevron: {
        alignSelf: 'flex-end',
    },
});