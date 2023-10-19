import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from '../../components';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import ListItem from '../../components/ListItem';
import Rankup from './Components/Rankup';

const data = ['20% Commision', '5 Gigs', '2 Promos'];

const theme = useTheme();
export default function ConsumerRank() {
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn />
      <ScrollView>
        <View>
          <Text style={styles.welcomeTxt}>Ranks</Text>
        </View>
        <View style={styles.seperator}></View>

        <View style={styles.new}>
          <Text style={{ fontFamily: fonts.robo_bold }}>
            New <Text style={{ fontFamily: fonts.robo_light }}>(Current Rank)</Text>
          </Text>
          <View>
            {data.map((item, index) => (
              <ListItem key={index} label={item} />
            ))}
          </View>
        </View>

        <View style={styles.seperator}></View>

        <Rankup
          title="Reach your next rank, Narmeen"
          heading="Selling Seniority"
          description="Complete at least 60 days as a New Artist"
          rating="60/60"
        />
        <View style={styles.seperator}></View>
        <Rankup
          heading="Orders"
          description="Earn at least Rs.50,000 from completed orders(all time)"
          rating="40,000/50,0000(Rs)"
        />
        <View style={styles.seperator}></View>
        <Rankup
          heading="Punctuality"
          description="Reach on-time based on your estimated time for up to 90% of your orders."
          rating="78/90 (%)"
        />
        <View style={styles.seperator}></View>
        <Rankup
          heading="Availability Rate"
          description="Accept order request(s) up to 90% of the time before they expire."
          rating="88/90 (%)"
        />
        <View style={styles.seperator}></View>
        <Rankup
          heading="Positive Rating"
          description="A minimum of 4.5 rating has to be maintained always"
          rating="4.5/5.0"
        />
        <View style={styles.seperator}></View>
        <Rankup
          heading="Days without Warnings"
          description="Avoid receiving critical warnings for up to 30 days for outstanding Pending Commission"
          rating="30/30"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingTop: heightToDp(8),
  },
  welcomeTxt: {
    fontSize: 40,
    color: '#193356',
    fontFamily: fonts.hk_bold,
    paddingHorizontal: widthToDp(4),
  },
  seperator: {
    height: 2,
    backgroundColor: '#DEDEDE',
  },
  new: {
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(4),
  },
});
