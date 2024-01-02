import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
    },
    btn: {
      marginBottom: heightToDp(3.5),
      color: '#668C6A',
    },
    genTxt: {
      fontSize: fonts.robo_reg,
      lineHeight: 16.41,
      color: theme.background,
    },
    infoText: {
      color: theme.dark,
    },
    icon: { backgroundColor: '#EEEEEE', padding: 14, borderRadius: 50, color: theme.primary, fontSize: 18 },
    genView: {
      width: width * 0.91,
      alignSelf: 'center',
      marginTop: heightToDp(4.5),
    },
    iconStyles: {
      width: 25,
      height: 25,
      marginRight: 10,
      resizeMode: 'contain',
    },
    headingtxt: {
      color: '#677790',
      fontSize: 12,
      marginHorizontal: widthToDp(4),
      fontFamily: fonts.robo_reg,
    },
    personalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: widthToDp(5),
    },
    personalMain: {
      backgroundColor: 'white',
      marginHorizontal: widthToDp(4),
      paddingVertical: 10,
      marginVertical: 15,
      borderRadius: 15,
    },
    separator: {
      height: 1,
      backgroundColor: '#EEEEEE',
      marginVertical: 5,
    },
    heading: {
      fontSize: 40,
      color: theme.darkBlue,
      paddingLeft: widthToDp(4),
      fontFamily: fonts.hk_bold,
    },
    subheading: {
      color: theme.primary,
      fontSize: 16,
      paddingTop: 10,
      fontFamily: fonts.robo_bold,
    },
    genBtn: {
      height: heightToDp(9.7),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 24,
    },
    emailcontaienr: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: widthToDp(4),
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: width * 0.9,
      marginTop: heightToDp(4.5),
      marginBottom: heightToDp(4.5),
    },
    iconWrapper: {
      alignItems: 'center',
      flexDirection: 'column',
    },
    iconText: {
      textTransform: 'uppercase',
      marginTop: heightToDp(3),
    },
  });

  return styles;
};

export default makeStyle;
