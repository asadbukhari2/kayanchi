import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        bottomView: {
            width: width,
            marginTop: heightToDp(15),
            // position: 'absolute',
            // bottom: heightToDp(5.5),
            alignItems: 'center',
            alignSelf: 'center',
        },
        btn: {
            position: 'absolute',
            bottom: heightToDp(5.5),
        },
        genTxt: {
            fontSize: fonts.robo_reg,
            fontSize: 14,
            lineHeight: 16.41,
            color: theme.background,
        },
        genView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width * 0.91,
            alignSelf: 'center',
            marginTop: heightToDp(4.5),
        },
        genBtn: {
            width: widthToDp(27.5),
            height: heightToDp(9.7),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 24,
        },
        modal: {
            flex: 1,
            margin: 0,
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        pickerOuterView: {
            width: width,
            backgroundColor: theme.dark,
            alignItems: 'center',
        },
        pickerDone: {
            padding: heightToDp(4.5),
            alignSelf: 'flex-end',
        },
    });
    return styles;
};

export default makeStyle;