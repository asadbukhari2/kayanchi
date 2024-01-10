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
        parentUpload: {
            width: widthToDp(90),
            marginLeft: widthToDp(5),
            marginTop: 10,
            marginHorizontal: 10,
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        upload: {
            backgroundColor: '#FFFFFF',
            width: 100,
            height: 100,
            borderRadius: 10,
            flex: 0,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'cover',
        },
        uploadText: {
            textAlign: 'center',

            fontSize: 14,
            // marginHorizontal: 24,
            fontFamily: fonts.robo_reg,
            marginTop: 8,
            lineHeight: 22,
            color: '#1682D6',
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
            color: '#2F3A58',
            fontFamily: fonts.hk_bold,
            paddingHorizontal: widthToDp(7),
        },
        subheading: {
            color: '#67718C',
            paddingHorizontal: widthToDp(7),
            fontSize: 16,
            fontFamily: fonts.robo_reg,
        },
    });
    return styles;
};

export default makeStyle;