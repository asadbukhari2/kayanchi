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
        container: {
            flex: 1,
            backgroundColor: '#F7F7F7',
        },
        orderContainer: {
            backgroundColor: 'white',
            marginHorizontal: widthToDp(5),
            marginBottom: 20,
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