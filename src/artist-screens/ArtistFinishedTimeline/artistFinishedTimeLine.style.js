import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
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
            paddingTop: heightToDp(7),
            backgroundColor: '#F7F7F7',
        },
        stepIndicatorContainer: {
            marginVertical: 20,
            flexDirection: 'column', // Display the steps in a column layout
            paddingHorizontal: widthToDp(5),
        },
        progressStepContainer: {
            alignItems: 'center',
        },
        stepContent: {
            marginTop: 20,
            alignItems: 'center',
        },
        orderContainer: {
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            marginHorizontal: widthToDp(5),
            paddingVertical: heightToDp(5),
            paddingHorizontal: widthToDp(1),
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
            padding: 5,
            color: 'white',
            fontSize: 12,
            borderRadius: 50,
            backgroundColor: '#a77246',
            textTransform: 'uppercase',
            paddingLeft: widthToDp(3),
            paddingRight: widthToDp(3),
        },
        separator: {
            height: 1,
            marginVertical: 5,
            backgroundColor: '#EEEEEE',
        },
        indicatorView: {
            marginBottom: 20,
            marginHorizontal: 24,
            marginTop: heightToDp(6),
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        headingName: {
            fontSize: 20,
            color: '#0F2851',
            fontFamily: fonts.hk_bold,
        },
        textBold: {
            fontWeight: 'bold',
        },
    });
    return styles;
};

export default makeStyle;