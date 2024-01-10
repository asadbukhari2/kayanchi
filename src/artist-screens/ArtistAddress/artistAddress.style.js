import { StyleSheet } from "react-native";
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
        radioTxt: {
            fontFamily: fonts.robo_reg,
            fontSize: 16,
            lineHeight: 22,
            color: theme.greyText,
            marginLeft: widthToDp(3.5),
        },
        radioCircle: {
            width: widthToDp(5),
            height: heightToDp(5),
            borderRadius: 9,
            backgroundColor: theme.homeBackground,
            alignItems: 'center',
            justifyContent: 'center',
        },
        radioTitle: {
            fontFamily: fonts.hk_regular,
            fontSize: 16,
            lineHeight: 22,
            color: theme.genderGrey,
        },
        currentLocation: {
            fontFamily: fonts.robo_reg,
            fontSize: 16,
            lineHeight: 22,
            color: theme.primary,
            marginLeft: widthToDp(3),
        },
        centerView: {
            backgroundColor: theme.background,
            width: width * 0.91,
            alignSelf: 'center',
            borderRadius: 10,
            paddingHorizontal: 17,
        },
        icon: {
            fontSize: 22,
            color: theme.primary,
        },
        straightRow: {
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
        btn: {
            position: 'absolute',
            bottom: heightToDp(5.5),
        },
        currentLocationRow: {
            marginTop: heightToDp(4.7),
            paddingVertical: heightToDp(2.2),
        },
        lowerViewMain: {
            marginTop: heightToDp(4.7),
            marginBottom: heightToDp(7),
        },
        firstRadio: {
            marginTop: heightToDp(2.2),
            paddingVertical: heightToDp(2.2),
        },
    });
    return styles;
};
export default makeStyle;