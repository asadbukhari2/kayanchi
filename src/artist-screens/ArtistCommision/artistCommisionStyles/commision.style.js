import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';

const makeStyle = theme => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        container2: {
            padding: 12,
        },
        heading: {
            fontSize: 40,
            fontFamily: fonts.hk_bold,
            color: '#0F2851',
        },
        text: {
            marginVertical: 6,
            fontSize: 16,
            color: theme.dark,
        },
        btn: {
            marginTop: 40,
            bottom: heightToDp(5.5),
        },
    });
    return styles;
};

export default makeStyle;