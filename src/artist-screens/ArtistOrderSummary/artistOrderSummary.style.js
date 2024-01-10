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
            width: 233,
            fontFamily: fonts.robo_reg,
            fontSize: 16,
            lineHeight: 20,
            color: theme.darkBlack,
        },
        addressView: {
            width: width * 0.868,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
        },
        icon: {
            fontSize: 20,
            color: theme.primary,
        },
        centerView: {
            marginTop: heightToDp(4.5),
            backgroundColor: theme.background,
            paddingVertical: heightToDp(6.7),
            paddingHorizontal: widthToDp(4.5),
            width: width * 0.91,
            alignSelf: 'center',
            borderRadius: 10,
        },
        dateLabel: {
            fontFamily: fonts.hk_bold,
            fontSize: 20,
            lineHeight: 20,
            color: theme.darkBlack,
            marginTop: heightToDp(6.7),
            marginBottom: heightToDp(2.2),
        },
        dateValue: {
            fontFamily: fonts.robo_reg,
            fontSize: 16,
            lineHeight: 20,
            color: theme.darkBlack,
        },
        charges: {
            fontFamily: fonts.hk_regular,
            fontSize: 16,
            lineHeight: 20,
            color: theme.darkBlack,
        },
        chargesView: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: heightToDp(4.5),
        },
        btn: {
            position: 'absolute',
            bottom: heightToDp(5.5),
        },
    });
    return styles;
};

export default makeStyle;