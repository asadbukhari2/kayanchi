
import { StyleSheet } from 'react-native';

import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F7F7F7',
            paddingTop: heightToDp(7),
        },
        timeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
            marginBottom: 20,
        },
        imageContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            height: heightToDp(55),
            width: widthToDp(69),
        },
        heading: {
            fontSize: 28,
            fontFamily: fonts.hk_bold,
            color: '#0F2851',
            textAlign: 'center',
            marginTop: 10,
        },
        clockImage: {
            width: 28,
            height: 21,
            resizeMode: 'contain',
            marginRight: 5,
        },
        orderContainer: {
            backgroundColor: 'white',
            // width: widthToDp(44),
            marginHorizontal: widthToDp(5),
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