import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        serviceName: {
            fontFamily: fonts.hk_bold,
            fontSize: 20,
            lineHeight: 20,
            color: theme.darkBlack,
        },
        artistLabel: {
            fontFamily: fonts.robo_light,
            fontSize: 14,
            lineHeight: 20,
            color: theme.greyText,
            marginTop: heightToDp(2.2),
        },
        artistName: {
            fontFamily: fonts.robo_reg,
            fontSize: 16,
            lineHeight: 20,
            color: theme.greyText,
        },
        counterCount: {
            fontSize: 24,
            fontFamily: fonts.hk_bold,
            lineHeight: 30,
            color: theme.primary,
            marginHorizontal: 9,
        },
    });
    return styles;
};

export default makeStyle;