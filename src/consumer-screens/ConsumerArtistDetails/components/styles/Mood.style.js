import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '31%',
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 20
    },
    iconContainer: {

        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5

    },
    moodIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',

    },
    moodIconBg: {
        backgroundColor: '#1583d8',
        borderRadius: 50,
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    colorBlack: {
        color: 'black'
    },
    fontSize18: {
        fontSize: 18
    },
    fontWeightSemiBold: {
        fontWeight: '600'
    },
    textLightGray: {
        color: '#747474'
    },
    marginTop5: {
        marginTop: 5
    },
    textCenter: {
        textAlign: 'center'
    },
    marginRight5: {
        marginRight:5
    }
})