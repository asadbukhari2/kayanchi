import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import makeStyle from './artistDrawer.style';
import { useTheme } from '../../utils/theme';
const theme = useTheme();
const ArtistDrawer = props => {
  const styles = makeStyle(theme)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
      <Text>haskc</Text>
    </SafeAreaView>
  );
};

export default ArtistDrawer;
