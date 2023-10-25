import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { Button, ButtonList, Header, ListHeader, TextInput, GradientRadio } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import WeeklyCalendar from 'react-native-weekly-calendar';

const theme = useTheme();

const DATA = [
  {
    name: '7:30 - 8:30 AM',
  },
  {
    name: '8:30 - 9:30 AM',
  },
  {
    name: '9:30 - 10:30 AM',
  },
];

const ArtistBookingDate = props => {
  const [timeSelected, setTimeSelected] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: heightToDp(30) }}>
        <Header backBtnGrey />
        <Text style={styles.title}>{'What’s your booking date and time ?'}</Text>
        <Text style={styles.subTitle}>{'SELECT DATE'}</Text>
        <WeeklyCalendar
          style={styles.calendarContainer}
          themeColor={theme.linkTxt}
          dayLabelStyle={styles.calendarDay}
          titleStyle={styles.calendarTitle}
          onDayPress={date => {
            console.log(date);
          }}
        />
        <ListHeader title={'CHOOSE TIME SLOT'} linkText={'Custom time'} />
        {/* <ButtonList
          DATA={DATA}
          containerStyle={styles.btnListContainer}
          btnStyle={styles.btnListBtn}
          txtStyle={{color: theme.darkBlack}}
          selectedBackgroundColor={theme.primary}
          backgroundColor={theme.background}
          textColor={theme.darkBlack}
        /> */}
        <FlatList
          data={DATA}
          horizontal
          keyExtractor={({ item, index }) => index}
          contentContainerStyle={{ paddingRight: widthToDp(4.5) }}
          renderItem={({ item, index }) => {
            return (
              <GradientRadio
                onPress={() => setTimeSelected(item.name)}
                title={item.name}
                containerStyle={styles.btnListContainer}
                titleStyle={{
                  marginTop: 0,
                  color: timeSelected === item.name ? theme.background : theme.backIcon,
                }}
                gradientEnd={{ x: 0, y: 1 }}
                gradientStart={{ x: 0, y: 0 }}
                gradients={timeSelected === item.name ? null : [theme.background, theme.background]}
              />
            );
          }}
        />
        <View style={styles.bookingHeader}>
          <Text style={styles.note}>{'BOOKING NOTES:'}</Text>
          <Text style={styles.optional}>{'(Optional)'}</Text>
        </View>
        <TextInput
          input={text => console.log(text)}
          multiline
          placeholder={'Please tell use anything that may assist with the order...'}
          inputMarginTop={{ marginTop: heightToDp(2.5) }}
          inputBoxStyle={styles.textInput}
        />
      </ScrollView>
      <Button title={'Continue'} btnStyle={styles.btn} onPress={() => props.navigation.navigate('OrderSummary')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  title: {
    marginTop: heightToDp(5.5),
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.hk_bold,
    fontSize: 34,
    lineHeight: 40.81,
    color: theme.lightBlack,
  },
  subTitle: {
    marginTop: heightToDp(6.7),
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.hk_bold,
    fontSize: 14,
    lineHeight: 20,
    color: theme.backIcon,
  },
  note: {
    fontFamily: fonts.hk_bold,
    fontSize: 14,
    lineHeight: 20,
    color: theme.backIcon,
    paddingLeft: widthToDp(6.7),
  },
  optional: {
    fontFamily: fonts.gothic_regular,
    fontSize: 14,
    lineHeight: 17.17,
    color: theme.green,
    paddingLeft: 5,
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
  btnListContainer: {
    marginLeft: widthToDp(4.5),
    marginTop: heightToDp(2.2),
    height: heightToDp(13.2),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
  },
  btnListBtn: {
    borderWidth: 0,
    marginRight: widthToDp(4.5),
    backgroundColor: theme.background,
    borderRadius: 10,
    height: heightToDp(13.5),
  },
  bookingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: heightToDp(9),
  },
  textInput: {
    height: 139,
    borderRadius: 10,
    width: width * 0.91,
    borderBottomWidth: 0,
    color: theme.greyText,
    backgroundColor: theme.background,
    textAlignVertical: 'top',
    paddingHorizontal: widthToDp(4.5),
    paddingVertical: heightToDp(2.2),
    fontFamily: fonts.sans_reg,
    lineHeight: 22,
  },
  calendarContainer: {
    height: 125,
    paddingTop: 24,
    width: width * 0.91,
    alignSelf: 'center',
    borderBottomWidth: 0,
    marginTop: 8,
    borderRadius: 10,
    borderTopWidth: 0,
  },
  calendarDay: {
    color: theme.darkBlue,
    fontFamily: fonts.hk_semiBold,
    lineHeight: 16,
    fontSize: 12,
  },
  calendarTitle: {
    color: theme.primary,
    fontFamily: fonts.sans_bold,
    lineHeight: 20,
    fontSize: 14,
  },
});

export default ArtistBookingDate;
