import { StyleSheet } from 'react-native';
import { height, heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.homeBackground,
    },

    artistName: {
      color: theme.background,
      fontSize: 32,
      fontFamily: fonts.hk_bold,
      lineHeight: 38.41,
    },
    artistLocation: {
      color: theme.background,
      fontSize: 14,
      fontFamily: fonts.robo_reg,
      lineHeight: 16.41,
    },
    promotionalContainer: { marginHorizontal: widthToDp(5) },
    promotionHeading: {
      color: '#2F3A58',
      fontSize: 20,
      fontFamily: fonts.hk_bold,
      paddingVertical: 10,
    },
    promotionalbtn: {
      backgroundColor: theme.primary,
      color: '#ffffff',
      width: widthToDp(67),
      padding: widthToDp(6),
      fontFamily: fonts.robo_bold,
      textAlign: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    promotionaltxt: {
      backgroundColor: '#E7E7E7',
      color: '#2F3A58',
      fontSize: 16,
      textAlign: 'center',
      fontFamily: fonts.robo_reg,
      width: widthToDp(67),
      padding: widthToDp(10),
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    artistRating: {
      color: theme.background,
      fontSize: 16,
      fontFamily: fonts.segoi,
      lineHeight: 21.28,
      marginLeft: 16,
      marginRight: 8.67,
    },
    starIcon: {
      fontSize: heightToDp(4.7),
      color: theme.yellow,
    },
    icon: {
      fontSize: heightToDp(5),
      color: theme.background,
    },
    locationPinView: {
      alignItems: 'center',
      justifyContent: 'center',
      width: widthToDp(12.2),
      height: heightToDp(12.2),
      borderRadius: heightToDp(12.2) / 2,
      backgroundColor: theme.primary,
      position: 'absolute',
      right: widthToDp(2.8),
      bottom: -heightToDp(6.1),
    },
    dotContainer: {
      width: 5, // Adjust the size of the dot
      height: 5, // Adjust the size of the dot
      borderRadius: 5, // Make it a circle
      backgroundColor: '#ffffff', // Set the desired color for the dot
    },
    headerMain: {
      position: 'absolute',
      left: widthToDp(7.2),
      bottom: heightToDp(7.2),
    },
    header: {
      width: width,
      backgroundColor: '#000',
      position: 'absolute',
      zIndex: 1,
    },
    linkTxt: {
      fontSize: 16,
      fontFamily: fonts.robo_reg,
      lineHeight: 18.75,
      color: theme.linkTxt,
    },
    imageContainer: {
      borderRadius: 50,
      padding: 8,
      margin: 2,
      justifyContent: 'center',
    },
    promotionTxt: {
      fontSize: 20,
      fontFamily: fonts.hk_medium,
      lineHeight: 24,
      color: theme.lightBlack,
    },
    PromotionTxtRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
      width: width * 0.868,
    },
    centerDiv: { flexDirection: 'row', alignItems: 'center' },
    modalNormalTxt: {
      fontFamily: fonts.robo_reg,
      fontSize: 16,
      lineHeight: 18.75,
      color: theme.darkBlack,
    },
    modalTitle: {
      marginBottom: 8,
      fontFamily: fonts.hk_bold,
      fontSize: 20,
      lineHeight: 24,
      color: theme.lightBlack,
    },
    modalTxtView: {
      marginHorizontal: widthToDp(6.7),
      marginTop: heightToDp(6.7),
    },

    OrderSummaryContainer: {
      // paddingTop: heightToDp(5),
      borderRadius: 10,
      paddingVertical: heightToDp(5),
      backgroundColor: 'white',
      // marginHorizontal: widthToDp(2),
      paddingHorizontal: widthToDp(2.8),
      width: widthToDp(28.8),
      flexDirection: 'column',
      alignItems: 'center',
    },

    OrderSummaryContainer2: {
      // paddingTop: heightToDp(5),
      borderRadius: 10,
      paddingVertical: heightToDp(3.5),
      backgroundColor: 'white',
      // marginHorizontal: widthToDp(2),
      paddingHorizontal: widthToDp(2.8),
      width: widthToDp(28.8),
      flexDirection: 'column',
      alignItems: 'center',
    },
    orderDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    OrderImage: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
    },
    bookingCount: {
      fontSize: 14,
      color: '#333333',
      marginTop: 6,
      lineHeight: 16,
      // fontWeight: 'bold',
      fontFamily: fonts.robo_med,
    },
    radioOuterCircle: {
      marginRight: 17,
      width: 18,
      height: 18,
      backgroundColor: theme.homeBackground,
      borderWidth: 1.5,
      borderColor: '#736F7B33',
      borderRadius: 9,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioTxt: {
      fontFamily: fonts.robo_reg,
      fontSize: 17,
      lineHeight: 18.75,
      color: theme.darkBlack,
    },
    radioDot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: theme.primary,
    },
    imageShare: {
      backgroundColor: '#ffffff',
      padding: 10,
      borderRadius: 50,
      position: 'absolute',
      right: -250,
      bottom: 0,
    },
    modalMainView: {
      height: height * 0.55,
      backgroundColor: theme.background,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    radioContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width: width * 0.868,
      position: 'absolute',
      alignSelf: 'center',
      bottom: heightToDp(25),
    },
    hostingImg: {
      width: widthToDp(10.5),
      height: heightToDp(10.5),
      resizeMode: 'cover',
      marginBottom: heightToDp(2.5),
    },
    travellingImg: {
      width: widthToDp(9),
      height: heightToDp(8),
      resizeMode: 'cover',
      marginBottom: heightToDp(2.8),
    },
    modalImg: {
      resizeMode: 'cover',
      alignSelf: 'center',
      height: heightToDp(47.5),
      width: widthToDp(53.7),
      marginTop: -heightToDp(23.75),
    },
    btnView: {
      borderBottomWidth: 1,
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 21,
      height: 50,
      borderColor: theme.inputText,
    },
    orderSummaryImage: {
      width: 21,
      height: 21,
      resizeMode: 'contain',
    },
    subHeading: {
      fontSize: 17,
      fontFamily: fonts.hk_bold,
      lineHeight: 20.7,
      color: theme.darkBlack,
    },
    subHeadingView: {
      borderBottomColor: theme.primary,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 9,
      borderBottomWidth: 1,
    },
  });

  return styles;
};

export default makeStyle;
