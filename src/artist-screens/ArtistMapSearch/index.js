import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, SearchBox } from '../../components';
import { heightToDp, width } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import makeStyle from './artistMapSearch.style';

const theme = useTheme();

const DATA = [
  {
    area: 'Dha phase 6',
    address: '402, building 14c, ittehad commercial lane 8, my',
  },
  {
    area: 'Dha phase 6',
    address: '402, building 14c, ittehad commercial lane 8, my',
  },
];

const ArtistMapSearch = props => {
  const [keyword, setKeyword] = useState('Dha phase 6, itthad commercia');
  const styles = makeStyle(theme)
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtnGrey title={'Locate kaynchi'} titleStyle={{ fontFamily: fonts.hk_bold }} />
      <SearchBox
        value={keyword}
        onChange={txt => setKeyword(txt)}
        placeholder={'Locate your Kaynchi...'}
        containerView={{ elevation: 0, marginTop: heightToDp(5) }}
        onSearch={() => props.navigation.navigate('MapSearch')}
      />
      <Text
        style={{
          fontFamily: fonts.robo_reg,
          fontSize: 12,
          marginBottom: 12,
          lineHeight: 14.06,
          color: theme.greyText,
          marginTop: 12,
          marginLeft: 24,
        }}>
        Search results
      </Text>
      {DATA.map((item, index) => {
        return (
          <TouchableOpacity activeOpacity={0.7} style={{ width: width * 0.868, marginBottom: 10, alignSelf: 'center' }}>
            <Text style={{ fontFamily: fonts.robo_bold, fontSize: 16, lineHeight: 18.75, color: theme.darkBlack }}>
              {item.area}
            </Text>
            <Text
              style={{
                fontFamily: fonts.robo_reg,
                marginTop: 6,
                fontSize: 14,
                lineHeight: 16.41,
                color: theme.greyText,
              }}
              numberOfLines={1}>
              {item.address}mhkgjy
            </Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};



export default ArtistMapSearch;
