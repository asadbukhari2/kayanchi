import { StyleSheet } from 'react-native';
import { height, heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.homeBackground,
    },

    modalElement: {
      backgroundColor: 'white',
      width: width * 0.91,
      height: (height * 0.91) / 4.5,
      flexDirection: 'row',
      borderRadius: 10,
      marginTop: 20,
    },
    modalText: {
      fontSize: 18,
      fontFamily: fonts.robo_bold,
      marginBottom: 20,
      color: 'white',
    },
    modalDescription: {
      fontSize: 12,
      color: 'white',
      textAlign: 'justify',
      paddingRight: widthToDp(17),
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
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

    welcome: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: widthToDp(5),
      marginBottom: heightToDp(2),
    },
    logoView: {
      flexDirection: 'row',
      height: heightToDp(24),
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: widthToDp(29.5),
      height: heightToDp(7),
      marginTop: heightToDp(2),
      resizeMode: 'contain',
    },
    icons: {
      flexDirection: 'row',
      marginTop: 5,
    },
    iconStyle: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
    },
    separator: {
      height: 1,
      backgroundColor: 'yellow',
      marginVertical: 5,
    },
    iconConatiner: {
      marginTop: 5,
      margin: 5,
      borderRadius: 50,
      padding: 5,
    },
    hosted: {
      backgroundColor: 'white',
      padding: heightToDp(8),
      margin: widthToDp(5),
      borderRadius: 20,
    },

    buttons: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      alignSelf: 'center',
      backgroundColor: '#F7F7F8',
      borderRadius: 5,
      position: 'absolute',
      bottom: -13,
      zIndex: 1,
      paddingTop: 10,
      shadowColor: '#3A3A3A0D',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2, // For Android
    },
    buttonText: {
      color: '#32aee3',
      textAlign: 'center',
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 15,
      borderWidth: 0.5,
      borderColor: '#eeeeee',
    },
    textBold: {
      fontWeight: '700',
    },
    // buttonOrder:{
    //   width: (width * .91)/2
    // },
    insightDetail: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    arrow: { height: 12, width: 12, resizeMode: 'contain' },
    arrowDetail: { flexDirection: 'row', alignItems: 'center' },

    hostingContainer: {
      backgroundColor: theme.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // padding: 15,

      paddingVertical: widthToDp(5),
      paddingHorizontal: widthToDp(4),
      borderRadius: 10,
      marginRight: 10,
      width: widthToDp(44),
    },
    hostingHeading: {
      fontSize: 24,
      color: 'white',
      // fontWeight: 'bold',
      fontFamily: fonts.robo_bold,
    },
    EarningConatiner: {
      flexDirection: 'row',
      marginHorizontal: widthToDp(5),
      // width: (width * 0.91) / 2,
    },

    insight: {
      backgroundColor: 'white',
      margin: widthToDp(5),
      borderRadius: 10,
      padding: 10,
    },
    impressionDetail: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 7,
    },

    orderDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    OrderImage: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
    },

    createBookingSlot: {
      fontSize: 16,
      textAlign: 'center',
      color: theme.linkTxt,
      fontFamily: fonts.robo_bold,
    },
    hostedHeading: {
      fontSize: 16,
      textAlign: 'center',
      color: '#0F2851',
      fontFamily: fonts.robo_bold,
    },
    buttonicon: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    headingName: {
      fontSize: 24,
      fontFamily: fonts.hk_bold,
      color: '#0F2851',
    },
    heading: {
      fontSize: 34,
      fontFamily: fonts.hk_bold,
      color: '#2F3A58',
    },
    invite: {
      backgroundColor: '#587c5c',
      padding: 5,
      borderRadius: 20,
      position: 'absolute',
      right: widthToDp(5),
      top: heightToDp(10),
    },

    text: {
      color: 'white',
      fontSize: 10,
      fontFamily: fonts.robo_med,
    },
    latestbutton: {
      padding: 5,
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      paddingLeft: widthToDp(3),
      paddingRight: widthToDp(3),
      borderRadius: 50,
    },
    welcomeTxt: {
      fontSize: 34,
      fontFamily: fonts.hk_bold,
      color: '#0F2851',
    },
    orderContainer: {
      width: widthToDp(44),
      marginRight: 10,
      // width: (width * 0.91) / 2,
      paddingTop: heightToDp(1),
      borderRadius: 10,
    },
    btn: {
      position: 'absolute',
      bottom: heightToDp(5.5),
    },
    inputBox: {
      flex: 1,
      fontSize: heightToDp(4.5),
      fontFamily: fonts.robo_reg,
      lineHeight: 18.75,
      color: theme.darkBlack,
      paddingLeft: widthToDp(6.5),
    },
    latestOrder: {
      padding: widthToDp(5),
    },
    icon: {
      fontSize: heightToDp(5),
      padding: heightToDp(4.5),
      color: theme.primary,
    },
    title: {
      fontFamily: fonts.hk_medium,
      fontSize: 20,
      lineHeight: 24,
      color: theme.lightBlack,
      width: width * 0.868,
      alignSelf: 'center',
      marginVertical: heightToDp(1.5),
    },
  });
  return styles;
};

export default makeStyle;
