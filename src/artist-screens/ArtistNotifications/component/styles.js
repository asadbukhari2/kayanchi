import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            marginBottom: 8,
            height: 88,
            width: width * 0.91,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            alignSelf: 'center',
        },
        txt: {
            fontSize: 14,
            lineHeight: 20,
            color: theme.backIcon,
        },
        img: {
            width: 20,
            height: 20,
            resizeMode: 'contain',
        },
        viewDetails: {
            position: 'absolute',
            right: 12,
            bottom: 10,
        },
        unReadBadge: {
            position: 'absolute',
            right: 8,
            top: 16,
            width: 11,
            height: 11,
            borderRadius: 11 / 2,
            backgroundColor: theme.msgUnReadBadge,
        },
        locationIconView: {
            width: 40,
            height: 40,
            marginHorizontal: 10,
            backgroundColor: theme.homeBackground,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    return styles;
};

export default makeStyle;