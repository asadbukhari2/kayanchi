import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        width: '97%',
        height: 110,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        marginTop: 15
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    colorBlue: {
        color: '#1583d8'
    },
    colorGray: {
        color: '#747474'
    },
    textLilneThrough: {
        textDecorationLine: "line-through"
    }, plusBtnContainer: {
        backgroundColor: '#84668c',
        padding: 10,
        borderRadius: 12
    }, plusIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    flex: {
        display: 'flex'
    },
    flexDirectionRow: {
        flexDirection: 'row'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    alignItemStart: {
        alignItems: 'flex-start'
    },
    alignItemCenter: {
        alignItems: 'center'
    },
    offerContainer: {
        marginLeft: 10,
        backgroundColor: '#fae5ff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 30,
        color: '#2f3a58'
    },
    marginLeft10: {
        marginLeft: 10,
    },
    icons: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    link: {
        color: '#3c97de'
    }
})