import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    heading: {
      color: '#0F2851',
      fontSize: 40,
      marginLeft: widthToDp(4),
      fontFamily: fonts.hk_bold,
    },
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      paddingTop: heightToDp(2),
    },
    time: {
      color: '#ffffff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    btn: { marginTop: 15, paddingBottom: 20 },
    daysOfWeekContainer: {
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: widthToDp(2),
      marginHorizontal: widthToDp(4),
      marginTop: heightToDp(2),
      width: widthToDp(92),
      height: 70,
      borderRadius: 10,
    },
    timeSlotContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
      marginHorizontal: widthToDp(4),
    },
    active: { flexDirection: 'row', alignItems: 'center' },
    btnnew: {
      marginHorizontal: widthToDp(4),
      marginVertical: heightToDp(3),
      fontFamily: fonts.sans_reg,
      color: '#677790',
    },
    dayOfWeekButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 40,
    },
    selectedDayButton: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
      borderRadius: 50,
      height: 40,
      width: 40,
    },
    highLightDayButton: {
      backgroundColor: theme.lightPrimary,
      borderColor: theme.primary,
      borderRadius: 50,
      height: 40,
      width: 40,
    },
    dayOfWeekText: {
      fontSize: 12,
      lineHeight: 16,
      color: '#0F2851',
      fontFamily: fonts.hk_bold,
    },
    selectedDayText: {
      color: 'white',
    },
    newSlotContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 12,
    },
    timeSlot: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: widthToDp(4),
      marginVertical: 15,
    },
    input: {
      backgroundColor: '#EEEEEE',
      padding: 15,
      borderRadius: 10,
      marginHorizontal: widthToDp(4),
      color: theme.darkBlack,
    },
    modal: {
      height: "100%",
      display: 'flex',
      justifyContent: 'center'
    },
    modalButtonContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20
    },
    modalButton: {
      padding: 0,
      backgroundColor: theme.primary,
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 5
    },
    textWhite: {
      color: 'white'
    }
  });
  return styles;
};

export default makeStyle;
