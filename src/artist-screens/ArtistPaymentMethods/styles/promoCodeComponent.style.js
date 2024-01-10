import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        card: {
            backgroundColor: 'white',
            marginHorizontal: widthToDp(4),
            paddingHorizontal: widthToDp(3),
            paddingVertical: heightToDp(5),
            borderRadius: 20,
        },
        cardNumber: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: heightToDp(3),
        },
        promocode: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
            paddingHorizontal: widthToDp(5),
            paddingVertical: heightToDp(5),
            marginHorizontal: widthToDp(4),
            backgroundColor: 'white',
            borderRadius: 10,
        },
        carDetail: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(4),
            marginTop: heightToDp(5),
            marginBottom: 5,
        },
    });
    return styles;
};

export default makeStyle;