import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Button, TextInput} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {useTheme, fonts} from '../../utils/theme';
import CalendarComponent from '../../components/Calender/CalendarComponent';
const theme = useTheme();
const timeSlots = [{time: '7:30-8:30 PM'}, {time: '8:30-9:30 PM'}];

const ConsumerBooking = props => {
  const [name, setName] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSelected, setIsSelected] = useState(false);
  const [timeSlotSelections, setTimeSlotSelections] = useState(
    Array(timeSlots.length).fill(false),
  );

  const handleDateSelection = date => {
    setSelectedDate(date);
  };
  const toggleSelection = index => {
    const newSelections = [...timeSlotSelections];
    newSelections[index] = !newSelections[index];
    setTimeSlotSelections(newSelections);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: widthToDp(5),
            width: widthToDp(90),
          }}>
          <View style={{marginLeft: 0}}>
            <Header backBtn />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.heading}>
            What's your booking<Text style={{color: '#84668C'}}> date</Text> and{' '}
            <Text style={{color: '#84668C'}}> time</Text> ?
          </Text>
        </View>

        <View style={{marginHorizontal: widthToDp(5)}}>
          <Text
            style={{
              fontFamily: fonts.hk_bold,
              fontSize: 14,
              color: '#67718C',
              marginTop:15,
              marginBottom: 8
            }}>
            SELECT DATE
          </Text>
          <CalendarComponent
            date={selectedDate}
            language="en"
            onPressDate={handleDateSelection}
            selectedColor="blue"
            showMonth={true}
            shadow={true}
          />
        </View>

        <View style={styles.timeSlot}>
          <Text
            style={{
              fontFamily: fonts.hk_bold,
              fontSize: 14,
              color: '#67718C',
              marginTop: 15,
            }}>
            Choose Time Slot
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: widthToDp(4)}}>
          {timeSlots.map((timeSlot, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.timeSlotContent]}
              onPress={() => toggleSelection(index)}>
              <Text
                style={[
                  styles.time,
                  {
                    backgroundColor: timeSlotSelections[index]
                      ? '#67506D'
                      : 'white',
                  },
                  {color: timeSlotSelections[index] ? 'white' : 'black'},
                ]}>
                {timeSlot.time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text
          style={{
            color: '#67718C',
            marginTop:15,
            fontFamily: fonts.hk_bold,
            marginHorizontal: widthToDp(5),
          }}>
          BOOKING NOTES: <Text style={{fontFamily: fonts.robo_light}}>(Optional)</Text>
        </Text>

        <View>
          <TextInput
            input={text => setName(text)}
            placeholder={
              'Please tell us anything that may assist with the order...'
            }
            multiline
            inputBoxStyle={{
              backgroundColor: '#ffffff',
              borderBottomColor: '#ffffff',
              padding: 10,

              height: heightToDp(45),
              borderRadius: 10,
              textAlignVertical: 'top',
            }}
          />
          <Text
            style={{
              color: '#29AAE2',
              position: 'absolute',
              right: 25,
              bottom: 5,
            }}>
            0/100
          </Text>
        </View>

        <View style={styles.btn}>
          <Button title="Select Hosting Address" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsumerBooking;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 34,
    fontFamily: fonts.hk_bold,
    marginLeft: widthToDp(4),
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  time: {
    // backgroundColor: theme.primary,
    // color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  btn: {marginVertical: 10},
  timeSlotContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(1),
  },
  timeSlot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(4),
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#EEEEEE',
    width: 50,
    borderRadius: 10,
    marginHorizontal: widthToDp(4),
  },
});
