import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.homeBackground,
    },
    inputBox: {
      flex: 1,
      fontSize: heightToDp(4.5),
      fontFamily: fonts.robo_reg,
      lineHeight: 18.75,
      color: theme.darkBlack,
    },
    searchBar: {
      flex: 1,
      height: heightToDp(13.3),
      backgroundColor: theme.background,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 5,
    },
    searchView: {
      width: width,
      paddingLeft: widthToDp(6.5),
      marginTop: heightToDp(5.5),
      flexDirection: 'row',
      alignSelf: 'center',
      height: heightToDp(13.3),
    },
    icon: {
      fontSize: heightToDp(5),
      padding: heightToDp(3.5),
      color: theme.darkBlack,
    },
    filterView: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: widthToDp(6.5),
      paddingRight: widthToDp(5),
    },
    filterIcon: {
      width: widthToDp(3.7),
      height: heightToDp(5.1),
      resizeMode: 'cover',
    },
    buttonView: {
      marginTop: heightToDp(6.6),
      marginBottom: heightToDp(6.4),
      width: width * 0.868,
      alignSelf: 'center',
    },
  });

  return styles;
};

export default makeStyle;
