import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        markRead: {
            fontFamily: fonts.robo_reg,
            fontSize: 14,
            lineHeight: 20,
            color: theme.linkTxt,
            marginTop: heightToDp(4.5),
            marginLeft: widthToDp(6),
            fontWeight: 'bold',
        },
    });
    return styles;
};

export default makeStyle;