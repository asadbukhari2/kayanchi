import { StyleSheet } from 'react-native';

import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        btn: {
            position: 'absolute',
            bottom: heightToDp(5.5),
        },
        labelText: {
            fontSize: 20,
            fontFamily: fonts.robo_med,
            lineHeight: 23.44,
            color: theme.lightBlack,
            marginTop: heightToDp(5),
        },
        subLabel: {
            fontSize: 16,
            lineHeight: 18.75,
            fontFamily: fonts.robo_reg,
            color: theme.darkBlack,
            marginTop: heightToDp(2.2),
        },
    });
    return styles;
};

export default makeStyle;