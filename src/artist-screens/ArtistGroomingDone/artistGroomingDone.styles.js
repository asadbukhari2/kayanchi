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
    },
    btnTxt: { marginVertical: 15 },
    selectedRatingText: {
      textAlign: 'center',
      color: '#747474',
      fontSize: 18,
      fontFamily: fonts.hk_bold,
      marginVertical: 12,
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: heightToDp(55),
      width: widthToDp(69),
      marginTop: heightToDp(20),
    },
    title: {
      fontSize: 20,
      fontFamily: fonts.hk_bold,
      color: '#0F2851',
      textAlign: 'center',
      marginTop: heightToDp(15),
      marginBottom: 15,
    },
    ratingButton: { flexDirection: 'row', marginRight: 10 },
    heading: {
      fontFamily: fonts.hk_bold,
      fontSize: 28,
      color: '#0F2851',
      textAlign: 'center',
      marginTop: 10,
    },

    modalMainView: {
      backgroundColor: '#F7F7F7',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    feedbackContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      marginTop: 20,
      paddingVertical: 20,
      marginHorizontal: widthToDp(5),
      paddingHorizontal: 20,
      borderRadius: 20,
    },

    clockImage: {
      width: 28,
      height: 21,
      resizeMode: 'contain',
    },
    orderContainer: {
      backgroundColor: 'white',
      // width: widthToDp(44),
      marginHorizontal: widthToDp(5),
      // width: (width * 0.91) / 2,
      paddingVertical: heightToDp(4),
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
      fontSize: 18,
      fontFamily: fonts.robo_bold,
      color: theme.dark,
    },
    textBold: {
      fontWeight: 'bold',
      fontSize: 13,
      color: theme.dark,
    },
  });
  return styles;
};

export default makeStyle;
