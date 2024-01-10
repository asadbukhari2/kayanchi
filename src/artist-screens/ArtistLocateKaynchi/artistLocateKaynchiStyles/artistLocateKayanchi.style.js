import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        bottomView: {
            backgroundColor: theme.background,
            position: 'absolute',
            bottom: 0,
            width: width,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
        },
        locationtxt: { flexDirection: 'row', alignItems: 'center', marginLeft: widthToDp(4), marginVertical: 12 },
        line: {
            width: widthToDp(9),
            height: heightToDp(0.9),
            backgroundColor: theme.inputBottom,
            borderRadius: 9,
            alignSelf: 'center',
            marginTop: heightToDp(3.5),
        },
        btn: { marginVertical: 20 },
        searchBox: {
            elevation: 0,
            marginTop: heightToDp(6.7),
        },
        modalMainView: {
            // height: height * 0.515,
            backgroundColor: theme.background,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        },
        artistName: {
            color: theme.lightBlack,
            fontSize: 32,
            fontFamily: fonts.hk_bold,
            lineHeight: 38.41,
            marginLeft: 20,
        },
        separator: {
            height: 1,
            backgroundColor: '#EEEEEE',
            marginVertical: 5,
        },

        artistRating: {
            color: theme.greyText,
            fontSize: 16,
            fontFamily: fonts.segoi,
            lineHeight: 21.28,
            marginLeft: 16,
            marginRight: 8.67,
        },
        starIcon: {
            fontSize: heightToDp(4.7),
            color: theme.yellow,
        },
        modalDistanceTxt: {
            marginLeft: 20,
            fontFamily: fonts.robo_reg,
            fontSize: 14,
            lineHeight: 16.41,
            color: theme.greyText,
            marginTop: 8,
        },
        statusBox: {
            width: 149,
            height: 109,
            borderRadius: 10,
            backgroundColor: theme.background,
            paddingVertical: 16,
            paddingHorizontal: 12,
        },
        statusTxt: {
            fontFamily: fonts.robo_reg,
            fontSize: 14,
            lineHeight: 16.41,
            color: theme.darkBlack,
            marginTop: 11,
        },
    });
    return styles;
};

export default makeStyle;