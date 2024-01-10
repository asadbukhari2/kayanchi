import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
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
        note: {
            fontFamily: fonts.hk_bold,
            fontSize: 14,
            lineHeight: 20,
            color: theme.backIcon,
            paddingLeft: widthToDp(6.7),
        },
        optional: {
            fontFamily: fonts.gothic_regular,
            fontSize: 14,
            lineHeight: 17.17,
            color: theme.green,
            paddingLeft: 5,
        },
        btn: {
            position: 'absolute',
            bottom: heightToDp(5.5),
        },
        btnListContainer: {
            marginLeft: widthToDp(4.5),
            marginTop: heightToDp(2.2),
            height: heightToDp(13.2),
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 0,
        },
        btnListBtn: {
            borderWidth: 0,
            marginRight: widthToDp(4.5),
            backgroundColor: theme.background,
            borderRadius: 10,
            height: heightToDp(13.5),
        },
        bookingHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: heightToDp(9),
        },
        textInput: {
            height: 139,
            borderRadius: 10,
            width: width * 0.91,
            borderBottomWidth: 0,
            color: theme.greyText,
            backgroundColor: theme.background,
            textAlignVertical: 'top',
            paddingHorizontal: widthToDp(4.5),
            paddingVertical: heightToDp(2.2),
            fontFamily: fonts.sans_reg,
            lineHeight: 22,
        },
        calendarContainer: {
            height: 125,
            paddingTop: 24,
            width: width * 0.91,
            alignSelf: 'center',
            borderBottomWidth: 0,
            marginTop: 8,
            borderRadius: 10,
            borderTopWidth: 0,
        },
        calendarDay: {
            color: theme.darkBlue,
            fontFamily: fonts.hk_semiBold,
            lineHeight: 16,
            fontSize: 12,
        },
        calendarTitle: {
            color: theme.primary,
            fontFamily: fonts.sans_bold,
            lineHeight: 20,
            fontSize: 14,
        },
    });
    return styles
}

export default makeStyle