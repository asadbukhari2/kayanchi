import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    gigVersionAsk: {
      marginLeft: widthToDp(5),
      fontSize: 20,
      fontFamily: fonts.robo_reg,
      marginTop: 30,
      lineHeight: 22,
      color: '#2F3A58',
    },
    parentMood: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    mood: {
      width: width * 0.9,
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    childMood: {
      width: width * 0.425,
      backgroundColor: 'blue',
      flex: 0,
      alignItems: 'center',
      paddingVertical: 10,
      borderRadius: 15,
    },
    childMoodHead: {
      fontFamily: fonts.robo_med,
      fontSize: 14,
      color: 'white',
      marginTop: 8,
    },
    childMoodBody: {
      fontFamily: fonts.robo_light,
      fontSize: 14,
      color: 'white',
      marginTop: 4,
    },

    parentUpload: {
      marginTop: 10,
      marginHorizontal: widthToDp(5),
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    upload: {
      backgroundColor: '#FFFFFF',
      width: widthToDp(90),
      height: 160,
      borderRadius: 10,
      flex: 0,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    uploadText: {
      textAlign: 'center',
      fontSize: 14,
      fontFamily: fonts.robo_reg,
      marginTop: 8,
      lineHeight: 22,
      color: '#1682D6',
    },
    gigVersion: {
      marginTop: 10,
    },
    warning: {
      fontSize: 16,
      marginHorizontal: 24,
      fontFamily: fonts.robo_reg,
      color: theme.darkModeText,
      marginTop: 8,
      lineHeight: 18.75,
    },
    warning2: {
      fontSize: 14,
      marginHorizontal: 24,
      fontFamily: fonts.robo_reg,
      color: theme.blue,
      marginTop: 8,
      marginBottom: 20,
      lineHeight: 18.75,
    },
    parentPrice: {
      flex: 0,
      flexDirection: 'row',
      backgroundColor: '#EBE8EC',
      borderRadius: 8,
      marginLeft: widthToDp(5),
      marginRight: widthToDp(5),
      marginBottom: 10,
    },
    pkr: {
      width: widthToDp(20),
      borderRadius: 10,
      marginTop: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 17,
      fontFamily: fonts.robo_med,
      color: '#9A9A9A',
      lineHeight: 22,
      opacity: 0.3,
    },
    priceField: {
      backgroundColor: '#DFDEDF',
      width: widthToDp(90),
      borderRadius: 8,
      paddingHorizontal: 10,
      fontSize: 16,
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
    container: {
      flex: 1,
      backgroundColor: theme.white,
    },
    skipView: {
      position: 'absolute',
      bottom: heightToDp(23),
      alignSelf: 'center',
    },
    btn: {
      marginTop: 40,
      bottom: heightToDp(5.5),
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
    },
    switch: {
      marginRight: 10,
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
    },
    title: {
      fontSize: 34,
      marginHorizontal: 18,
      fontFamily: fonts.hk_bold,
      color: theme.lightBlack,
    },
    title2: {
      fontSize: 20,
      marginHorizontal: 24,
      fontFamily: '700',
      lineHeight: 24,
      color: '#2F3A58',
    },
    serviceDuration: {
      flex: 0,
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginTop: 20,
    },
    childServiceDuration: {
      height: 40,
      marginLeft: 10,
    },
  });

  return styles;
};

export default makeStyle;
