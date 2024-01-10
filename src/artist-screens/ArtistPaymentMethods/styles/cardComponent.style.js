import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        card: {
            backgroundColor: 'white',
            marginHorizontal: widthToDp(5),
            paddingHorizontal: widthToDp(3),
            paddingVertical: heightToDp(5),
            borderRadius: 10,
        },
        cardNumber: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: heightToDp(3),
        },
        carDetail: {
            flexDirection: 'row',
            justifyContent: 'space-between',

            marginHorizontal: widthToDp(5),
            marginTop: heightToDp(5),
            marginBottom: 5,
        },
    });
    return styles;
};

export default makeStyle;