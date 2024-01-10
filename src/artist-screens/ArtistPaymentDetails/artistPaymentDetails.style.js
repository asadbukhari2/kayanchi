import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.homeBackground,
        },
        title: {
            marginTop: heightToDp(5.5),
            width: width * 0.868,
            alignSelf: 'center',
            fontFamily: fonts.hk_bold,
            fontSize: 34,
            lineHeight: 40.81,
            color: theme.lightBlack,
        },
        subTitle: {
            marginTop: heightToDp(6.7),
            width: width * 0.868,
            alignSelf: 'center',
            fontFamily: fonts.hk_bold,
            fontSize: 14,
            lineHeight: 20,
            color: theme.backIcon,
        },
        titleTxt: {
            fontFamily: fonts.robo_reg,
            fontSize: 16,
            lineHeight: 20,
            color: theme.darkBlack,
            marginLeft: widthToDp(6.7),
        },
        chargesTxt: {
            fontFamily: fonts.hk_regular,
            fontSize: 16,
            lineHeight: 20,
            color: theme.primary,
            marginRight: widthToDp(6.7),
        },
        straightRow: {
            width: width,
            alignSelf: 'center',
            marginTop: heightToDp(2.2),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        straightRowInner: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        centerView: {
            width: width * 0.91,
            backgroundColor: theme.background,
            padding: heightToDp(4.5),
            alignSelf: 'center',
            marginTop: heightToDp(2.2),
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        addAddress: {
            backgroundColor: theme.background,
            paddingHorizontal: widthToDp(3.2),
            paddingVertical: heightToDp(5),
            borderRadius: 10,
            width: width * 0.91,
            alignSelf: 'center',
            marginTop: heightToDp(6.7),
        },
        radioTxt: {
            fontFamily: fonts.robo_reg,
            fontSize: 16,
            lineHeight: 22,
            color: theme.greyText,
            marginLeft: widthToDp(3.5),
        },
        icon: {
            fontSize: 22,
            color: theme.primary,
        },
        firstRadio: {
            marginTop: heightToDp(2.2),
            paddingVertical: heightToDp(2.2),
        },
        radioCircle: {
            width: widthToDp(5),
            height: heightToDp(5),
            borderRadius: 9,
            backgroundColor: theme.homeBackground,
            alignItems: 'center',
            justifyContent: 'center',
        },
        radioDot: {
            width: widthToDp(3.6),
            height: heightToDp(3.6),
            borderRadius: heightToDp(3.6) / 2,
            backgroundColor: theme.primary,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 5,
        },
    });
    return styles;
};

export default makeStyle;