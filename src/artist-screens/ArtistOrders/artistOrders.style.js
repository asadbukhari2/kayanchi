import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        heading: {
            color: '#193356',
            fontSize: 40,
            fontFamily: fonts.hk_bold,
            marginLeft: widthToDp(4),
        },
        btnContainer: {
            flexDirection: 'row',
            marginHorizontal: widthToDp(5),
            marginVertical: 10,
        },
        btnContainer2: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(5),
            marginVertical: 8,
            backgroundColor: 'white',
        },
        tabText: {
            fontSize: 16,
            color: 'black',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
        },
        activeTab: {
            backgroundColor: theme.primary,
            color: 'white',
            fontWeight: 'bold',
            paddingVertical: 10,
        },
        button: {
            fontFamily: fonts.robo_reg,
            borderWidth: 1,
            paddingHorizontal: 5,
            paddingVertical: 5,
            borderRadius: 20,
            fontSize: 14,
            marginRight: 10,
        },
        orderStatus: {
            backgroundColor: '#668C6A',
            color: 'white',
            paddingVertical: 5,
            paddingHorizontal: 10,
            width: widthToDp(25),
            borderRadius: 20,
            marginTop: 15,
            marginBottom: 5,
        },
        subheading: {
            fontSize: 12,
            color: '#193356',
            marginRight: 10,
            width: widthToDp(30),
        },
        container: {
            flex: 1,
            backgroundColor: '#F7F7F7',
            paddingTop: heightToDp(2),
        },
        orderContainer: {
            backgroundColor: 'white',
            width: width * 0.91,
            marginHorizontal: widthToDp(5),
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
            marginHorizontal: 10,
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
            fontSize: 18,
            fontWeight: 'bold',
        },
        textBold: {
            fontWeight: 'bold',
        },
    });
    return styles;
};

export default makeStyle;