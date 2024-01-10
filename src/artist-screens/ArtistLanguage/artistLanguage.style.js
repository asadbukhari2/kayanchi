import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
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
            paddingTop: heightToDp(7),
        },
        time: {
            // backgroundColor: theme.primary,
            color: '#ffffff',
            paddingVertical: 5,
            paddingHorizontal: 15,
            borderRadius: 10,
        },
        btn: { marginTop: 15 },
        daysOfWeekContainer: {
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: widthToDp(2),
            marginHorizontal: widthToDp(4),
            marginTop: heightToDp(2),
            width: widthToDp(92),
            paddingVertical: 15,
            borderRadius: 10,
        },
        timeSlotContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(4),
        },
        active: { flexDirection: 'row', alignItems: 'center' },
        btnnew: { marginHorizontal: widthToDp(4), marginVertical: heightToDp(3) },
        dayOfWeekButton: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 8,

            // borderWidth: 1,
            // borderColor: '#0F2851',
        },
        selectedDayButton: {
            backgroundColor: theme.primary,
            borderColor: theme.primary,
            borderRadius: 30,
        },
        dayOfWeekText: {
            fontSize: 12,
            color: '#0F2851',
            fontFamily: fonts.hk_bold,
        },
        selectedDayText: {
            color: 'white',
        },
        newSlotContainer: { flexDirection: 'row', alignItems: 'center' },
        timeSlot: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(4),
            marginVertical: 15,
        },
        input: {
            backgroundColor: '#EEEEEE',
            width: 50,
            borderRadius: 10,
            marginHorizontal: widthToDp(4),
        },
    });
    return styles;
};

export default makeStyle;