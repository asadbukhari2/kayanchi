import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    btn: {
      marginBottom: heightToDp(3.5),
      marginTop: heightToDp(10),
    },
    genTxt: {
      fontSize: fonts.robo_reg,

      lineHeight: 16.41,
      color: theme.background,
    },
    genView: {
      width: width * 0.91,
      alignSelf: 'center',
      marginTop: heightToDp(4.5),
    },
    heading: { fontSize: 40, color: '#0F2851', paddingLeft: widthToDp(4) },
    subheading: {
      color: '#677790',
      fontSize: 14,
      paddingTop: 10,
      paddingLeft: widthToDp(4),
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
      width: width * 0.9, // Use the width of the parent view to adjust the icon container
      marginTop: heightToDp(4.5),
      marginBottom: heightToDp(4.5),
    },
    iconWrapper: {
      alignItems: 'center',
      flexDirection: 'column', // Ensure text appears below the icon
    },
    iconText: {
      textTransform: 'uppercase',
      marginTop: heightToDp(3),
    },
  });
  return styles;
};

export default makeStyle;
