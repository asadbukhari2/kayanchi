import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { Button, ButtonList, Header, ListHeader, TextInput, GradientRadio } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import WeeklyCalendar from 'react-native-weekly-calendar';
import makeStyle from './artistBookingDate.style';

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
  const styles = makeStyle(theme)
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



export default ArtistBookingDate;
