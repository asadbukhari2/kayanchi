import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        paymentContainer: {
            flexDirection: 'row',
            marginHorizontal: widthToDp(5),
            paddingVertical: heightToDp(2),
            width: width * 0.45,
        },
        reason: { marginLeft: widthToDp(5) },
        image: { height: 36, width: 38 },
        separator: {
            height: 1,
            backgroundColor: '#DDDDDD',
            marginVertical: 5,
        },
        transId: {
            position: 'absolute',
            right: 10,
        },
    });
    return styles;
};

export default makeStyle;