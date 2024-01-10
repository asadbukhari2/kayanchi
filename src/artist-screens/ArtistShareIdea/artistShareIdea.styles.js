import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
    },
    subHeading: {
      // fontWeight: '500',
      fontSize: 16,
      fontFamily: fonts.robo_med,
      color: '#0F2851',
      marginLeft: widthToDp(5),
      marginBottom: 10,
    },
    files: {
      position: 'absolute',
      right: 20,
      bottom: 10,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: widthToDp(5),
      marginTop: 10,
    },
    imageFileContainer: {
      backgroundColor: '#eeeeee',
      padding: 5,
      borderRadius: 30,
    },
    imageFile: { width: 20, height: 20, resizeMode: 'contain' },
    rowContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    optionsContainer: {
      paddingHorizontal: 20,
      width: width * 0.91,
    },
    optionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 20,
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 7,
      borderRadius: 30,
    },
    iconContainer: {
      marginRight: 10,
      // marginLeft: 10
    },
    optionTitle: {
      fontSize: 12,
      color: '#0F2851',
    },
  });

  return styles;
};

export default makeStyle;
