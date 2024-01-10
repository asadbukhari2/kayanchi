import { StyleSheet } from 'react-native';

import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        heading: {
            color: '#0F2851',
            fontSize: 40,
            marginLeft: widthToDp(4),
            fontFamily: fonts.hk_bold,
        },
        container: {
            flex: 1,
            backgroundColor: '#F7F7F7',
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            backgroundColor: 'white',
            borderRadius: 8,
            paddingHorizontal: 12,
            borderColor: 'white',
            paddingVertical: 2,
            marginHorizontal: widthToDp(4),
        },

        image: { position: 'absolute', width: 16, height: 16, marginLeft: 8 },
        resolution: {
            width: 48,
            height: 48,
            resizeMode: 'contain',
            margin: 5,
            marginTop: 15,
        },
        helpContainer: {
            backgroundColor: 'white',
            paddingHorizontal: widthToDp(5),
            paddingVertical: heightToDp(5),
            borderRadius: 10,
        },
        containerContent: {
            flexDirection: 'row',
            marginVertical: heightToDp(4),
            marginHorizontal: widthToDp(4),
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        input: {
            flex: 1,
            marginLeft: 15,
            color: theme.dark,
        },
        centeredContainer: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: widthToDp(35),
        },
        faqcontainer: {
            backgroundColor: 'white',
            marginHorizontal: widthToDp(4),
            paddingHorizontal: widthToDp(4),
            paddingVertical: 10,
            borderRadius: 10,
        },
        faqContent: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: widthToDp(2),
            marginBottom: 6,
        },
        faqimage: { width: 12, height: 12, resizeMode: 'contain' },
        iconStyles: {
            width: 25,
            height: 25,
            marginRight: 10,
            resizeMode: 'contain',
            // , position: 'absolute', left: widthToDp(5)
        },
        head: {
            color: '#1583D8',
            fontSize: 14,
            fontFamily: fonts.sans_reg,
        },
    });
    return styles;
};

export default makeStyle;