import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';

const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 12,
        },
        heading: {
            fontSize: 40,
            fontFamily: fonts.hk_bold,
            color: '#0F2851',
        },
        text: {
            fontSize: 18,
            fontWeight: 'normal',
            marginVertical: 12,
            color: theme.dark,
        },
        heading2: {
            fontWeight: 'bold',
            fontSize: 16,
            marginVertical: 12,
            color: theme.dark,
        },
        green: {
            color: 'green',
        },
        yellow: {
            color: 'orange',
        },
        red: {
            color: 'red',
        },
        para: {
            marginVertical: 6,
            fontSize: 16,
            color: theme.dark,
        },
        btn: {
            marginTop: 40,
            position: 'absolute',
            bottom: heightToDp(5.5),
        },

        heading2: {
            color: theme.darkModeText,
            fontSize: 16,
            fontFamily: fonts.hk_bold,
        },

        beta: {
            color: theme.greyText,
            fontSize: 12,
            marginHorizontal: 8,
        },
        arrowYellow: {
            top: 8,
            left: 7,
            width: 10,
            height: 10,
            borderBottomWidth: 15,
            borderLeftWidth: 15,
            borderLeftColor: 'transparent',
            borderBottomColor: 'yellow',
            transform: [{ rotate: '-135deg' }],
        },
        arrowGreen: {
            top: 8,
            width: 10,
            height: 8,
            borderBottomWidth: 15,
            borderLeftWidth: 15,
            borderLeftColor: 'transparent',
            borderBottomColor: 'green',
            transform: [{ rotate: '-135deg' }],
        },
        arrowRed: {
            top: 8,
            width: 10,
            height: 8,
            borderBottomWidth: 15,
            borderLeftWidth: 15,
            borderLeftColor: 'transparent',
            borderBottomColor: 'red',
            transform: [{ rotate: '-135deg' }],
            right: 7,
        },
    });
    return styles;
};

export default makeStyle;