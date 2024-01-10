import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    heading: {
      color: '#0F2851',
      fontSize: 40,
      marginLeft: widthToDp(4),
      fontFamily: fonts.hk_bold,
    },
    subheading: {
      marginLeft: widthToDp(4),
      fontSize: 16,
      color: '#67718C',
      marginBottom: 5,
    },
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
    },
    btn: {
      position: 'absolute',
      bottom: heightToDp(5.5),
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: 'white',
      borderRadius: 8,
      paddingHorizontal: 12,
      borderColor: 'white',
      paddingVertical: 2,
      marginHorizontal: widthToDp(4),
    },

    image: { position: 'absolute', width: 16, height: 16, marginLeft: 8 },
    resolution: { width: 48, height: 48, resizeMode: 'contain', margin: 5 },
    helpContainer: {
      backgroundColor: 'white',
      paddingHorizontal: widthToDp(5),
      paddingVertical: heightToDp(5),
      borderRadius: 10,
    },
    containerContent: {
      flexDirection: 'row',
      marginVertical: heightToDp(4),
      marginHorizontal: widthToDp(4),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      height: heightToDp(30),
      backgroundColor: 'white',
      color: theme.dark,
      textAlignVertical: 'top',
      borderRadius: 10,
      paddingLeft: 10,
      marginBottom: 20,
    },
    centeredContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    faqcontainer: {
      backgroundColor: 'white',
      marginHorizontal: widthToDp(4),
      paddingHorizontal: widthToDp(4),
      paddingVertical: 10,
      borderRadius: 10,
    },
    refund: {
      color: '#ABABAB',
      fontSize: 12,
      textAlign: 'center',
      marginVertical: 15,
    },
    refundContainer: { marginHorizontal: widthToDp(28) },
    faqContent: {
      // flexDirection: 'row',
      // alignItems: 'center',
      // justifyContent: 'space-between',
      paddingVertical: widthToDp(2),
    },
    faqimage: { width: 12, height: 12, resizeMode: 'contain' },
    iconStyles: {
      width: 25,
      height: 25,
      marginRight: 10,
      resizeMode: 'contain',
      // , position: 'absolute', left: widthToDp(5)
    },
  });
  return styles;
};

export default makeStyle;
