import { StyleSheet } from 'react-native';
import colors from "../../theme";

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_COLOR,
    },
    screenContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
    cardContainer: {
        padding: 15,
        backgroundColor: colors.WHITE,
        marginBottom: 10,
        borderRadius: 5,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 50,
        height: 50,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontWeight: '600',
        fontSize: 16,
    },
    title: {
        fontWeight: '400',
        fontSize: 14,
    },
    linkText: {
        color: colors.LINK,
    },
    filterButton: {
        backgroundColor: colors.BLUE,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:20
    },
    filterText: {
        fontSize: 20,
        color: colors.WHITE,
        fontWeight: '500',
        letterSpacing: 2,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: colors.DARK_BLUE,
        width: '50%',
        height: 40,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.WHITE,
    },
    favoriteText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
    },
    divider: {
        borderWidth: 0.3,
        borderColor: colors.GREY,
        marginTop: 10,
        marginBottom: 20,
    },
})

export default styles;