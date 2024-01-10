import { StyleSheet } from 'react-native';

import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.homeBackground,
        },
        title: {
            marginTop: heightToDp(5.5),
            width: width * 0.868,
            alignSelf: 'center',
            fontFamily: fonts.hk_bold,
            fontSize: 34,
            lineHeight: 40.81,
            color: theme.lightBlack,
        },
        titleTxt: {
            marginTop: heightToDp(4.5),
            width: width * 0.868,
            alignSelf: 'center',
            fontFamily: fonts.robo_reg,
            fontSize: 16,
            lineHeight: 20,
            color: theme.darkBlack,
        },
        picView: {
            width: width * 0.868,
            height: heightToDp(43.2),
            backgroundColor: theme.background,
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: heightToDp(6.7),
            alignItems: 'center',
            justifyContent: 'center',
        },
        uploadTxt: {
            fontFamily: fonts.robo_reg,
            fontSize: 14,
            lineHeight: 20,
            color: theme.primary,
            marginTop: heightToDp(3, 9),
        },
        imgIcon: {
            width: widthToDp(15.5),
            height: heightToDp(14.5),
            resizeMode: 'cover',
        },
        viewAllRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: heightToDp(6.7),
        },
        viewAll: {
            fontFamily: fonts.robo_reg,
            fontSize: 16,
            lineHeight: 18.75,
            color: theme.linkTxt,
            paddingHorizontal: widthToDp(4.5),
            paddingVertical: heightToDp(0.5),
        },
        listHeader: {
            fontFamily: fonts.hk_medium,
            fontSize: 20,
            lineHeight: 24,
            color: theme.lightBlack,
            marginLeft: widthToDp(6.7),
        },
        imagesCardName: {
            marginTop: heightToDp(2.2),
            marginLeft: heightToDp(2.5),
        },
        imagesCardContainer: {
            alignItems: 'flex-start',
            marginRight: widthToDp(2.2),
            marginTop: heightToDp(4.5),
        },
        imagesCardImg: {
            height: heightToDp(33.3),
            width: widthToDp(33.3),
            borderRadius: 10,
        },
        btn: {
            position: 'absolute',
            bottom: heightToDp(5.5),
        },
    });
    return styles;
};

export default makeStyle;