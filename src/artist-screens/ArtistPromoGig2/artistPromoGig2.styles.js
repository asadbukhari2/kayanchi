import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.white,
    },
    parentUpload: {
      width: widthToDp(90),
      marginLeft: widthToDp(5),
      marginTop: 10,
      marginHorizontal: 10,
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    upload: {
      backgroundColor: '#FFFFFF',
      width: 100,
      height: 100,
      borderRadius: 10,
      flex: 0,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'cover',
    },
    uploadText: {
      textAlign: 'center',

      fontSize: 14,
      // marginHorizontal: 24,
      fontFamily: fonts.robo_reg,
      marginTop: 8,
      lineHeight: 22,
      color: '#1682D6',
    },
    gigVersion: {
      marginTop: 30,
    },

    warning: {
      fontSize: 14,
      marginHorizontal: 24,
      fontFamily: fonts.robo_reg,
      color: '#8D8A94',
      marginTop: 8,
      lineHeight: 18.75,
    },
    parentPrice: {
      flex: 0,
      flexDirection: 'row',
      backgroundColor: '#EBE8EC',
      borderRadius: 8,
      marginLeft: widthToDp(5),
      marginRight: widthToDp(5),
      marginTop: 10,
    },
    pkr: {
      width: widthToDp(20),
      borderRadius: 10,
      marginTop: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 17,
      fontFamily: fonts.robo_med,
      color: '#242424',
      lineHeight: 22,
      opacity: 0.3,
    },
    priceField: {
      backgroundColor: '#EBE8EC',
      width: widthToDp(75),
      // marginLeft: widthToDp(5),
      borderRadius: 8,
      // paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 16,
      // marginHorizontal: 24,
      fontFamily: fonts.robo_med,
      color: '#8D8A94',
      lineHeight: 22,
    },
    inputField: {
      backgroundColor: 'white',
      width: widthToDp(90),
      marginLeft: widthToDp(5),
      borderRadius: 10,
      marginTop: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 16,
      marginHorizontal: 24,
      fontFamily: fonts.robo_med,
      color: '#8D8A94',
      lineHeight: 22,
    },

    skipView: {
      position: 'absolute',
      bottom: heightToDp(23),
      alignSelf: 'center',
    },
    btn: {
      marginTop: 40,
      // position: 'absolute',
      bottom: heightToDp(5.5),
    },
    img: {
      resizeMode: 'cover',
      height: heightToDp(59.95),
      width: widthToDp(67.9),
      alignSelf: 'center',
      marginTop: heightToDp(6.7),
    },
    skip: {
      fontSize: 14,
      fontFamily: fonts.robo_reg,
      lineHeight: 16.41,
      color: theme.linkTxt,
    },
    txt: {
      fontSize: 16,
      marginHorizontal: 24,
      fontFamily: fonts.robo_reg,
      color: '#67718C',
      marginTop: 8,
      lineHeight: 18.75,
    },
    title: {
      fontSize: 24,
      marginHorizontal: 24,
      fontFamily: fonts.robo_med,
      color: theme.lightBlack,
    },
  });

  return styles;
};

export default makeStyle;
