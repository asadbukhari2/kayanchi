import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';

const theme = useTheme();

const Tabs = props => {
  const { DATA, containerStyle, btnStyle, txtStyle, selectedTab } = props;

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    selectedTab(DATA.map((item, index) => (index === selected ? item.name : null)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return DATA ? (
    <FlatList
      data={DATA}
      style={{ marginTop: 8, height: 50 }}
      contentContainerStyle={[containerStyle, { height: 50 }]}
      horizontal
      keyExtractor={({ item, index }) => index}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => setSelected(index)}
            activeOpacity={0.7}
            disabled={item.name}
            style={[
              styles.btnView,
              {
                borderColor: selected === index ? theme.primary : 'none',
                borderBottomWidth: selected === index ? 1 : 0,
              },
              btnStyle,
            ]}>
            {item && item.imageLink && <Image source={item.imageLink} style={styles.tabImage} />}

            <Text
              style={[
                styles.txt,
                {
                  color: selected === index ? theme.primary : theme.greyText,
                },
                {
                  fontSize: selected === index ? 17 : 16,
                },
                {
                  fontWeight: selected === index ? '700' : '500',
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

export default React.memo(Tabs);

const styles = StyleSheet.create({
  btnView: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 50,
  },
  txt: {
    fontSize: 16,
    fontFamily: fonts.hk_medium,
    color: '#747474',
    marginLeft: 2,
  },
  tabImage: {
    width: 15,
    height: 15,
    marginRight: 2,
    resizeMode: 'contain',
  },
});
