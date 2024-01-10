import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        loadMoney: {
            width: widthToDp(44),
            height: heightToDp(27),
            borderRadius: 10,
        },
        withdrawmoney: {
            width: widthToDp(44),
            height: heightToDp(27),
            borderRadius: 10,
        },
        balanceContainer: {
            flexDirection: 'row',
            marginHorizontal: widthToDp(5),
            justifyContent: 'space-between',
            marginTop: 15,
        },
        iconloadMoney: { width: 25, height: 25, resizeMode: 'contain', margin: 13 },
        iconwithdrawmoney: {
            width: 25,
            height: 31,
            resizeMode: 'contain',
            position: 'absolute',
            right: 5,
        },
        text: { color: 'white', paddingLeft: 15, marginRight: widthToDp(19) },
        text2: {
            color: 'white',
            paddingLeft: 15,
            position: 'absolute',
            bottom: heightToDp(5),
            marginRight: widthToDp(15),
        },
    });
    return styles;
};

export default makeStyle;