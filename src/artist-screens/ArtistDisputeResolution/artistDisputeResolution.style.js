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
        resolution: { width: 48, height: 48, resizeMode: 'contain', margin: 5 },
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
            height: heightToDp(30),
            backgroundColor: '#F1F1F1',
            textAlignVertical: 'top',
            borderRadius: 10,
            paddingLeft: 10,
            color: theme.dark,
        },
        centeredContainer: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        faqcontainer: {
            backgroundColor: 'white',
            marginHorizontal: widthToDp(4),
            marginTop: 15,
            paddingHorizontal: widthToDp(4),
            paddingVertical: 10,
            borderRadius: 10,
        },
        refund: {
            color: '#ABABAB',
            fontSize: 12,
            textAlign: 'center',
            marginVertical: 15,
            fontFamily: fonts.robo_reg,
        },
        refundContainer: { marginHorizontal: widthToDp(28), marginTop: heightToDp(20) },
        faqContent: {
            paddingVertical: widthToDp(2),
        },
        faqimage: { width: 12, height: 12, resizeMode: 'contain' },
        iconStyles: {
            width: 25,
            height: 25,
            marginRight: 10,
            resizeMode: 'contain',
        },
        btn: {
            paddingBottom: 20,
        },
    });
    return styles;
};

export default makeStyle;