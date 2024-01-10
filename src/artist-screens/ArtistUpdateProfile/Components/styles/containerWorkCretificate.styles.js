import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../../../utils/Dimensions';
import { fonts } from '../../../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    Diploma: {
      backgroundColor: '#FFFFFF',
      marginHorizontal: widthToDp(5),
      marginVertical: heightToDp(4),
      borderRadius: 10,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: widthToDp(3),
      marginVertical: 5,
    },
    titleContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },

    titleContainer: {
      marginTop: 10,
      backgroundColor: 'white',
      marginHorizontal: widthToDp(4),
      paddingVertical: 10,
      borderRadius: 10,
    },
    limitText: {
      color: '#29AAE2',
      textAlign: 'right',
      paddingRight: 15,
      fontFamily: fonts.robo_reg,
    },
    title: { paddingLeft: 10, flex: 1 },
    separator: {
      height: 1,
      backgroundColor: '#EEEEEE',
      marginVertical: 5,
    },

    input: {
      width: 200,
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    datePicker: {
      width: 200,
      marginTop: 10,
    },
    gigContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // paddingRight: widthToDp(5),
      marginHorizontal: widthToDp(3),
    },
    heading: {
      fontSize: 18,
      color: '#2F3A58',
      fontFamily: fonts.hk_bold,
      // paddingHorizontal: widthToDp(4),
      paddingVertical: heightToDp(3),
    },
    headingModal: {
      fontSize: 34,
      color: '#2F3A58',
      fontFamily: fonts.hk_bold,
      paddingHorizontal: widthToDp(4),
      // paddingHorizontal: widthToDp(4),
      paddingVertical: heightToDp(3),
    },
    subheading: { fontSize: 16, color: '#333333', fontFamily: fonts.robo_med },
    subheading2: {
      fontSize: 16,
      paddingHorizontal: widthToDp(4),
      color: '#67718C',
      fontFamily: fonts.robo_reg,
      marginRight: widthToDp(15),
    },
    DiplomaConatiner: {
      width: width * 0.91,
      flexDirection: 'row',
      paddingVertical: 10,
    },
    genRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width * 0.91,
      alignSelf: 'center',

      marginTop: heightToDp(4.5),
    },
    genView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width * 0.91,
      alignSelf: 'center',
      marginTop: heightToDp(4.5),
      color: '#ffffff',
    },
    genTxt: { color: '#ffffff', marginLeft: 6 },
    categoryItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    genBtn: {
      // flex: 1,
      width: widthToDp(27.5),
      height: heightToDp(9.7),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 24,
      color: '#ffffff',
    },
    welcomeTxt: {
      fontSize: 16,
      fontFamily: fonts.robo_med,
      // fontWeight: 'bold',
      paddingHorizontal: widthToDp(4),
      color: '#747474',
    },
    subheading3: { color: '#67718C', paddingHorizontal: widthToDp(4) },
  });

  return styles;
};

export default makeStyle;
