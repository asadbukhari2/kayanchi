import { formatDistanceToNowStrict } from "date-fns";
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
    iconBg: {
        backgroundColor: '#a77246',
        borderRadius: 50,
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
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
    }
})