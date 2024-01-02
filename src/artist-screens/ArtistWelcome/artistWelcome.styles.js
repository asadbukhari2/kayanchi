import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingTop: heightToDp(10),
    },
    btnText: { marginVertical: 10 },
    img: {
      width: 299.02,
      height: 199,
      marginTop: 14,
      alignSelf: 'center',
      resizeMode: 'cover',
    },
    iconStyles: {
      width: 30,
      height: 30,
      position: 'absolute',
      left: widthToDp(5),
    },
    heading: {
      width: width * 0.868,
      alignSelf: 'center',
      fontFamily: fonts.robo_med,
      fontSize: 28,
      lineHeight: 32.81,
      color: theme.darkBlack,
      marginTop: heightToDp(6.75),
    },
    txt: {
      width: width * 0.868,
      alignSelf: 'center',
      fontFamily: fonts.robo_reg,
      fontSize: 16,
      lineHeight: 18.75,
      color: theme.darkBlack,
      marginTop: heightToDp(2.2),
    },
    whiteBtn: {
      backgroundColor: theme.background,
      borderWidth: 1,
      borderColor: theme.primary,
    },
    blackText: {
      color: theme.darkBlack,
    },
    seperatorContainer: {
      width: width * 0.91,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: heightToDp(4.5),
    },
    seperator: {
      borderBottomColor: theme.orSeperator,
      borderBottomWidth: 1,
      flex: 1,
    },
    buttons: {
      position: 'absolute',
      bottom: 32,
      left: 0,
      right: 0,
    },
  });
  return styles;
};

export default makeStyle;
