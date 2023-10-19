import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import Feather from 'react-native-vector-icons/Feather';

const theme = useTheme();

const index = props => {
  const { onChange, value, placeholder, containerView, onSearch } = props;
  return (
    <View style={[styles.searchBar, containerView]}>
      <TouchableOpacity activeOpacity={0.7} onPress={onSearch}>
        <Feather name={'search'} style={styles.icon} />
      </TouchableOpacity>
      <TextInput
        value={value}
        style={styles.inputBox}
        placeholder={placeholder}
        placeholderTextColor={theme.darkBlack}
        onChangeText={txt => onChange(txt)}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  searchBar: {
    height: heightToDp(13.3),
    width: width * 0.91,
    backgroundColor: theme.background,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 10,
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  inputBox: {
    flex: 1,
    fontSize: heightToDp(4.5),
    fontFamily: fonts.robo_reg,
    lineHeight: 18.75,
    color: theme.darkBlack,
    paddingLeft: widthToDp(1.5),
  },
  icon: {
    fontSize: heightToDp(5),
    padding: heightToDp(4.5),
    color: theme.primary,
  },
});
