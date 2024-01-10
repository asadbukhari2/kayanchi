import { StyleSheet } from 'react-native';
import { heightToDp, width, height, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F7F7F7',
            paddingTop: heightToDp(8),
        },
        genRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width * 0.91,
            alignSelf: 'center',

            marginTop: heightToDp(4.5),
        },
        genView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width * 0.91,
            alignSelf: 'center',
            marginTop: heightToDp(4.5),
            color: '#ffffff',
        },
        genTxt: { color: '#ffffff', marginLeft: 6 },
        categoryItem: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        genBtn: {
            // flex: 1,
            width: widthToDp(27.5),
            height: heightToDp(9.7),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 24,
            color: '#ffffff',
        },
        welcomeTxt: {
            fontSize: 34,
            fontFamily: fonts.hk_bold,
            color: '#2F3A58',
            paddingHorizontal: widthToDp(5),
        },
        subheading: {
            color: '#67718C',
            fontSize: 16,
            fontFamily: fonts.robo_reg,
            paddingHorizontal: widthToDp(5),
        },
    });
    return styles;
};

export default makeStyle;