import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    btn: {
      position: 'absolute',
      bottom: heightToDp(5.5),
    },

    bottomView: {
      width: width,
      marginTop: heightToDp(15),
      alignItems: 'center',
      alignSelf: 'center',
    },
    genTxt: {
      fontSize: 14,
      lineHeight: 16.41,
      color: theme.background,
    },
    genView: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: width * 0.91,
      alignSelf: 'center',
      marginTop: heightToDp(4.5),
    },
    genBtn: {
      width: widthToDp(27.5),
      height: heightToDp(9.7),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 24,
      marginHorizontal: 5,
    },

    pickerOuterView: {
      width: '100%',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 10,
    },
    pickerDone: {
      paddingVertical: heightToDp(4),
      paddingHorizontal: widthToDp(15),

      alignSelf: 'center',
      backgroundColor: theme.primary,
      borderRadius: 10,
    },
  });
  return styles;
};

export default makeStyle;
