import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from '../../components';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import ListItem from '../../components/ListItem';
import Rankup from './Components/Rankup';
import Star_Yellow from '../../assets/star_yellow.png';
import makeStyle from './artistRankUp.styles';
const data = ['20% Commision', '5 Gigs', '2 Promos'];

const theme = useTheme();
export default function ArtistRankUp(props) {
  const styles = makeStyle(theme)
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn />
      <ScrollView>
        <View>
          <Text style={styles.welcomeTxt}>Ranks</Text>
        </View>
        <View style={styles.seperator} />

        <View style={styles.new}>
          <Text
            style={{
              fontFamily: fonts.robo_med,
              color: '#0F2851',
              fontSize: 16,
              marginBottom: 9,
            }}>
            New <Text style={{ fontFamily: fonts.robo_reg }}>(Current Rank)</Text>
          </Text>
          <View>
            {data.map((item, index) => (
              <ListItem key={index} label={item} />
            ))}
          </View>
        </View>

        <View style={styles.seperator} />

        <Rankup
          title="Reach your next rank, Narmeen"
          heading="Selling Seniority"
          description="Complete at least 60 days as a New Artist"
          rating="60/60"
        />
        <View style={styles.seperator} />
        <Rankup
          heading="Orders"
          description="Earn at least Rs.50,000 from completed orders(all time)"
          rating="40,000"
          total="/50,0000(Rs)"
        />
        <View style={styles.seperator} />
        <Rankup
          heading="Punctuality"
          description="Reach on-time based on your estimated time for up to 90% of your orders."
          rating="78"
          total="/90 (%)"
        />
        <View style={styles.seperator} />
        <Rankup
          heading="Availability Rate"
          description="Accept order request(s) up to 90% of the time before they expire."
          rating="88"
          total="/90 (%)"
        />
        <View style={styles.seperator} />
        <Rankup
          heading="Positive Rating"
          description="A minimum of 4.5 rating has to be maintained always"
          imageLink={Star_Yellow}
          rating="4.5/5.0"
        />
        <View style={styles.seperator} />
        <Rankup
          heading="Days without Warnings"
          description="Avoid receiving critical warnings for up to 30 days for outstanding Pending Commission"
          rating="30/30"
        />
      </ScrollView>
    </SafeAreaView>
  );
}


