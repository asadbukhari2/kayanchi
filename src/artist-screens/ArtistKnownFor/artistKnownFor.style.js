import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        btn: {
            marginBottom: heightToDp(3.5),
        },
        genTxt: {
            fontFamily: fonts.hk_bold,
            fontSize: 20,
            lineHeight: 21,
            color: theme.background,
        },
        genView: {
            width: width * 0.91,
            alignSelf: 'center',
            marginTop: heightToDp(4.5),

            // marginTopightToDp(8.5),
        },
        genBtn: {
            //   width: widthToDp(27.5),
            // height: heightToDp(9),
            paddingVertical: heightToDp(2.5),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 24,
        },
        iconContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: width * 0.9,
            marginTop: heightToDp(4.5),
            marginBottom: heightToDp(4.5),
        },
        iconWrapper: {
            alignItems: 'center',
            flexDirection: 'column',
        },
        iconText: {
            textTransform: 'uppercase',
            marginTop: heightToDp(3),
            fontFamily: fonts.robo_reg,
        },
    });
    return styles;
};

export default makeStyle;