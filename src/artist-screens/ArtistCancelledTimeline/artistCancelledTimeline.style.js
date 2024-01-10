import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
    const styles = StyleSheet.create({
        heading: {
            color: '#0F2851',
            fontSize: 40,
            marginLeft: widthToDp(4),
            fontFamily: fonts.hk_bold,
        },
        textCenter: {
            color: '#67718C',
            textAlign: 'center',
            marginHorizontal: widthToDp(12),
            marginTop: 10,
        },
        container: {
            flex: 1,
            backgroundColor: '#F7F7F7',
            paddingTop: heightToDp(7),
        },
        stepIndicatorContainer: {
            marginVertical: 20,
            paddingHorizontal: widthToDp(5),
            flexDirection: 'column', // Display the steps in a column layout
        },
        progressStepContainer: {
            alignItems: 'center',
        },
        stepContent: {
            alignItems: 'center',
            marginTop: 20,
        },
        orderContainer: {
            backgroundColor: 'white',
            // width: widthToDp(44),
            marginHorizontal: widthToDp(5),
            marginTop: 20,
            marginBottom: 20,
            // width: (width * 0.91) / 2,
            paddingVertical: heightToDp(5),
            paddingHorizontal: widthToDp(1),
            borderRadius: 10,
        },
        orderDetails: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        OrderImage: {
            height: 25,
            width: 25,
            resizeMode: 'contain',
        },
        latestbutton: {
            backgroundColor: '#a77246',
            padding: 5,
            color: 'white',
            fontSize: 12,
            textTransform: 'uppercase',
            paddingLeft: widthToDp(3),
            paddingRight: widthToDp(3),
            borderRadius: 50,
        },
        separator: {
            height: 1,
            backgroundColor: '#EEEEEE',
            marginVertical: 5,
        },
        indicatorView: {
            marginHorizontal: 24,
            marginTop: heightToDp(6),
            marginBottom: 20,
        },
        row: { flexDirection: 'row', alignItems: 'center' },

        headingName: {
            fontSize: 20,
            fontFamily: fonts.hk_bold,
            color: '#0F2851',
        },
        textBold: {
            fontWeight: 'bold',
        },
    });
    return styles;
};

export default makeStyle;