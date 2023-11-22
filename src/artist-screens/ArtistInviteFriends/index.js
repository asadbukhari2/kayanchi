import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header } from '../../components';
import { Text, View, Image, ScrollView } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import makeStyle from './styles.inviteFriends';

const invitefriend = require('../../assets/invitefriend.png');

export default function ArtistInviteFriends({ navigation }) {
  const theme = useTheme();
  const styles = makeStyle(theme);

  const clickHandler = async () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn titleShadow />
      <ScrollView>
        <Text style={[styles.heading, { fontFamily: fonts.hk_bold }]}>Bring a friend &</Text>
        <Text style={[styles.subheading, { fontFamily: fonts.robo_reg }]}>
          Get <Text style={{ fontFamily: fonts.robo_bold }}>15% off</Text> on your next order
        </Text>
        <Text style={[styles.subheading, { fontFamily: fonts.robo_reg }]}>
          Your friend gets <Text style={{ fontFamily: fonts.robo_bold }}>10% off</Text> on their first order
        </Text>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <Image source={invitefriend} style={{ height: 250, width: 250, resizeMode: 'contain' }} />
        </View>

        <Button title="Invite your friend" btnStyle={styles.btn} onPress={clickHandler} />
      </ScrollView>
    </SafeAreaView>
  );
}
