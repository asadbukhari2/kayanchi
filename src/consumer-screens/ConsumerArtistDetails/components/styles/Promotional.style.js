import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 300,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 15
    },
    cardImageContainer: {},
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    textBlack: {
        color: "black"
    },
    fontSize15: {
        fontSize: 15
    },
    fontWeightBold: {
        fontWeight: 'bold'
    },
    textColorBlue: {
        color: '#1583d8'
    },
    btn: {
        backgroundColor: '#84668c',
        padding: 10,
        borderRadius: 12
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex: {
        display: 'flex',
    },
    flexRow: {
        flexDirection: 'row'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    padding10: {
        padding: 10
    },
    plusIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }
})