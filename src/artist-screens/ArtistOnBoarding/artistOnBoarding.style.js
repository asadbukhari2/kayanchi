import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        indicatorTxt: {
            fontSize: 16,
            fontFamily: fonts.robo_reg,
            color: theme.darkBlack,
            lineHeight: 18.75,
            marginLeft: widthToDp(2),
        },
        dot: {
            width: 9,
            height: 9,
            borderRadius: 9 / 2,
        },
        indicatorView: { marginHorizontal: 24, marginTop: heightToDp(4) },
        row: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
        img: {
            height: heightToDp(70),
            width: widthToDp(70),
            alignSelf: 'center',
        },
        txt: {
            fontSize: 16,
            width: '90%',
            paddingHorizontal: widthToDp(5),
            fontFamily: fonts.robo_reg,
            color: theme.darkBlack,
            marginVertical: heightToDp(4),
            lineHeight: 18.75,
            marginRight: widthToDp(19),
        },
        title: {
            fontSize: 24,
            width: '85%',
            paddingHorizontal: widthToDp(5),
            fontFamily: fonts.hk_bold,
            color: theme.lightBlack,
            marginTop: heightToDp(8),
        },
    });
    return styles;
};

export default makeStyle;