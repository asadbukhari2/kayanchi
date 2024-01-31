import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '31%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 20
    },
    icons: {
        width: 27,
        height: 27,
        resizeMode: 'contain',
        marginRight: 5
    },
    flex: {
        display: 'flex',
        // borderWidth: 2,
        width: '80%'
    },
    flecDirestionRow: {
        flexDirection: 'row'
    },
    alignItemsCenter: {
        alignItems: 'center'
    }, gap5: {
        gap: 5
    },
    colorPurple: {
        color: "#84668c"
    },
    colorLightGray: {
        color: "#828282"
    },
    fontBold: {
        fontWeight: 'bold'
    },
    textBlack: {
        color: 'black'
    },
    marginBottom5: {
        marginBottom: 5
    }
})