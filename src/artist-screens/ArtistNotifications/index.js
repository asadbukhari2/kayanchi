import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { GLOBAL_STYLES } from '../../utils/styles';
import { fonts, useTheme } from '../../utils/theme';
import Msg from './component';
import makeStyle from './artistNotifications.styles';

const theme = useTheme();

const DATA = [
  {
    title: 'Congrats on your first order...',
    body: 'We’ve got a gift for you.',
    unRead: true,
  },
  {
    title: 'Hey dany! The artist is near your loc',
    body: 'Please be prepared.',
    unRead: false,
  },
  {
    title: 'Congrats on your first order...',
    body: 'We’ve got a gift for you.',
    unRead: false,
  },
];

const ArtistNotifications = props => {
  const [unRead, setUnRead] = useState(false);
  const styles = makeStyle(theme)
  return (
    <SafeAreaView style={GLOBAL_STYLES.containerHome}>
      <Header backBtnGrey />
      <Text style={GLOBAL_STYLES.title}>Notifications</Text>
      <Text style={styles.markRead}>Mark all as read</Text>
      <View style={{ marginTop: heightToDp(4.5) }}>
        {DATA.map((item, index) => {
          return <Msg key={index} title={item.title} body={item.body} unRead={item.unRead} />;
        })}
      </View>
    </SafeAreaView>
  );
};



export default ArtistNotifications;
