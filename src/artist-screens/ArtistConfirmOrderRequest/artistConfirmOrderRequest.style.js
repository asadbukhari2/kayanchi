import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F7F7F7',
        },
        orderContainer: {
            backgroundColor: 'white',
            marginHorizontal: widthToDp(4),
            borderRadius: 10,
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        map: {
            flex: 1,
        },
        bookingNotes: {
            backgroundColor: 'white',
            marginHorizontal: widthToDp(4),
            borderRadius: 10,
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 20,
        },
        timeContainer2: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(4),
            marginVertical: heightToDp(3),
        },
        time: {
            backgroundColor: '#E6E6E6',
            paddingVertical: 5,
            paddingHorizontal: 15,
            color: '#67718C',
            // fontWeight: '500',
            fontFamily: fonts.robo_med,
            borderRadius: 10,
        },
        timereach: {
            // fontWeight: '500',
            fontFamily: fonts.robo_med,
            color: '#0F2851',
            fontSize: 16,
            textTransform: 'uppercase',
        },
        circularbar: {
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: widthToDp(4),
            justifyContent: 'space-between',
            marginTop: 10,
        },
        userLocation: {
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: widthToDp(4),
        },
        timeContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginHorizontal: widthToDp(4),
            marginTop: 15,
        },
        indicatorView: {
            marginHorizontal: widthToDp(5),
            marginTop: heightToDp(3),
            marginBottom: 15,
        },
        row: { flexDirection: 'row', alignItems: 'center' },

        starIcon: {
            fontSize: heightToDp(4.7),
            color: theme.yellow,
            paddingHorizontal: 5,
        },
        hosting: {
            color: '#0F2851',
            fontSize: 16,
            fontFamily: fonts.robo_med,
            // fontWeight: '500',
            marginHorizontal: widthToDp(4),
            marginVertical: 10,
        },
        headingContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: widthToDp(4),
        },
        locationContainer: {
            flexDirection: 'column',
            marginHorizontal: widthToDp(4),
            justifyContent: 'space-between',
        },
        heading: {
            color: '#193356',
            fontSize: 32,
            fontFamily: fonts.hk_bold,
        },
        images: {
            width: 38,
            height: 38,
            resizeMode: 'contain',
        },
        imagesLoc: {
            width: 10,
            height: 12,
            resizeMode: 'contain',
        },
        subheading: {
            color: '#333333',
            fontSize: 13,
            paddingHorizontal: 5,
        },
        subheading2: {
            color: '#9A9A9A',
            fontSize: 13,
        },
        orderDetails: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    });
    return styles;
};

export default makeStyle;