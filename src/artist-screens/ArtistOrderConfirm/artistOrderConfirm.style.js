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
    });
    return styles;
};

export default makeStyle;