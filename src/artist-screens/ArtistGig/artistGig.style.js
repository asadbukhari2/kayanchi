import { StyleSheet } from 'react-native';
import { heightToDp, width, height, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#EEEEEE',
            paddingTop: heightToDp(8),
            paddingHorizontal: widthToDp(5),
        },
        welcomeTxt: {
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
            paddingHorizontal: widthToDp(4),
        },
        seperator: {
            height: 2,
            backgroundColor: '#DEDEDE',
        },
        heading: {
            fontSize: 40,
            color: '#2F3A58',
            fontFamily: fonts.hk_bold,
            paddingVertical: heightToDp(3),
        },
        subheading: {
            color: '#67718C',
            fontSize: 12,
            textAlign: 'center',
            fontFamily: fonts.robo_reg,
        },
        new: {
            paddingVertical: heightToDp(5),
            paddingHorizontal: widthToDp(4),
        },

        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'rgba(0, 0, 0, 0.9)', // Transparent black background
        },
        modalContent: {
            padding: 20,
            borderRadius: 10,
            alignItems: 'center',
            paddingTop: 20,
        },
        imageModal: {
            width: 80,
            height: 100,
            resizeMode: 'contain',
            marginTop: heightToDp(5),
            marginLeft: 10,
        },
        closeIconContainer: {
            backgroundColor: '#EEEEEE',
            borderRadius: 20,
            position: 'absolute',
            right: 20,
            top: 5,
        },
        modalElement: {
            backgroundColor: 'white',
            width: width * 0.91,
            height: (height * 0.91) / 4,
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'visible',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 10,
        },
        modalText: {
            fontSize: 18,
            fontFamily: fonts.robo_med,
            color: 'white',
        },
        modalDescription: {
            fontSize: 14,
            color: '#D5D5D5',
            fontFamily: fonts.robo_reg,
            textAlign: 'left',
            paddingRight: widthToDp(5),
        },
        buttontext: { marginVertical: heightToDp(5) },
    });
    return styles;
};

export default makeStyle;