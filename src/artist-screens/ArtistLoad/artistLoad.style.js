import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        txt: {
            color: '#1583D8',
            borderColor: '#1583D8',
            borderWidth: 1,
            paddingHorizontal: widthToDp(6),
            paddingVertical: heightToDp(2),
            borderRadius: 20,
        },
        input: {
            marginTop: 20,
            width: widthToDp(58),
            backgroundColor: '#E7E7E7',
            marginHorizontal: widthToDp(5),
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: '#E7E7E7',
            borderRadius: 5,
        },
        loadContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
        },
        load: {
            backgroundColor: theme.primary,
            paddingHorizontal: widthToDp(10),
            paddingVertical: heightToDp(3),
            borderRadius: 30,
            marginTop: 20,
        },
        balanceContainer: {
            backgroundColor: 'white',
            marginVertical: heightToDp(2),
            marginHorizontal: widthToDp(5),
            paddingHorizontal: widthToDp(4),
            paddingVertical: heightToDp(5),
            borderRadius: 10,
        },
        checkboxContainer: { flexDirection: 'row', alignItems: 'center' },
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