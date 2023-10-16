import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {height} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';

const theme = useTheme();

const index = props => {
  const {DATA, containerStyle, btnStyle, txtStyle, selectedTab} = props;

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    selectedTab(
      DATA.map((item, index) => (index == selected ? item.name : null)),
    );
  }, [selected]);

  return DATA ? (
    <FlatList
      data={DATA}
      style={{marginTop: 8, height: 50}}
      contentContainerStyle={[containerStyle, {height: 50}]}
      horizontal
      keyExtractor={({item, index}) => index}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => setSelected(index)}
            activeOpacity={0.7}
            style={[
              styles.btnView,
              {
                borderColor:
                  selected == index ? theme.primary : theme.inputText,
              },
              btnStyle,
            ]}>
            {item && item.imageLink && (
              <Image source={item.imageLink} style={styles.tabImage} />
            )}

            <Text
              style={[
                styles.txt,
                {
                  color: selected == index ? theme.primary : theme.greyText,
                },
                {
                  fontSize: selected == index ? 17 : 16,
                },
                {
                  fontWeight: selected == index ? '700' : '500',
                },
                txtStyle,
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  ) : null;
};

export default index;

const styles = StyleSheet.create({
  btnView: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row', // Added for image and text side by side
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 50,
  },
  txt: {
    fontSize: 16,
    fontFamily: fonts.hk_medium,
    color:"#747474",
    lineHeight: 16.41,
    marginLeft: 2, // Added for spacing between image and text
  },
  tabImage: {
    width: 15, // Adjust image dimensions as needed
    height: 15,
    marginRight: 2, // Added for spacing between image and text
    resizeMode: 'contain',
  },
});
