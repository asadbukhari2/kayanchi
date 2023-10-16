import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, FlatList, View} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';

const theme = useTheme();

const index = props => {
  const {
    DATA,
    containerStyle,
    btnStyle,
    txtStyle,
    selectedBackgroundColor,
    backgroundColor,
    textColor,
  } = props;

  const [selected, setSelected] = useState(0);

  return DATA ? (
    <View>
      <FlatList
        data={DATA}
        contentContainerStyle={containerStyle}
        horizontal
        keyExtractor={({item, index}) => index}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => setSelected(index)}
              activeOpacity={0.7}
              style={[
                styles.btnView,
                btnStyle,
                {
                  borderColor:
                    selected == index ? theme.lightGreen : theme.genderGrey,
                  backgroundColor:
                    selected == index
                      ? selectedBackgroundColor
                      : backgroundColor,
                },
              ]}>
              <Text
                style={[
                  styles.txt,
                  txtStyle,
                  {
                    color: selected == index ? theme.background : textColor,
                  },
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  ) : null;
};

export default index;

const styles = StyleSheet.create({
  btnView: {
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: widthToDp(4.5),
    height: heightToDp(8.7),
    borderRadius: heightToDp(8.7),
    marginRight: widthToDp(2.2),
  },
  txt: {
    fontSize: 14,
    fontFamily: fonts.robo_reg,
    lineHeight: 16.41,
  },
});
