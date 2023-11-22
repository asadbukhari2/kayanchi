import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

import arrowupcolor from '../../assets/arrowupcolor.png';
import arrowdowncolor from '../../assets/arrowdowncolor.png';

import ToggleSwitch from 'toggle-switch-react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addAvailableDays, addBookingSlot, removeAvailableDays } from '../../redux/actions';

const theme = useTheme();

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let timeSlots = [
  { id: 1, start_time: '11:31 AM', end_time: '12:30 PM', is_active: 'true' },
  { id: 2, start_time: '11:31 AM', end_time: '12:30 PM', is_active: 'true' },
  { id: 3, start_time: '11:31 AM', end_time: '12:30 PM', is_active: 'true' },
  { id: 4, start_time: '11:31 AM', end_time: '12:30 PM', is_active: 'true' },
];

const ArtistBookingSlots = () => {
  const [selectedDay, setSelectedDay] = useState([]);

  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);

  const [timePeriod, setTimePeriod] = useState('AM');
  const [showNewSlot, setShowNewSlot] = useState(false);
  const [newSlotStart, setNewSlotStart] = useState('');
  const [newSlotEnd, setNewSlotEnd] = useState('');

  const dispatch = useDispatch();

  const { availableDays } = useSelector(state => state.common);

  useEffect(() => {
    setSelectedDay(availableDays);
    setSelectedTimeSlots(timeSlots);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddNewSlot = () => {
    if (newSlotStart && newSlotEnd) {
      dispatch(addBookingSlot({ start_time: '12:30 PM', end_time: '01:32 PM' }));
      // setSelectedTimeSlots([...selectedTimeSlots, `${newSlotStart}-${newSlotEnd} ${timePeriod}`]);
      setNewSlotStart('');
      setNewSlotEnd('');
      setShowNewSlot(false);
    }
  };

  const toggleTimePeriod = () => {
    setTimePeriod(timePeriod === 'AM' ? 'PM' : 'AM');
  };

  const handleIsActive = (itm, e) => {
    const updated = selectedTimeSlots.map(_ => {
      if (_.id === itm.id) {
        console.log(_);
        return {
          ..._,
          is_active: e,
        };
      } else {
        return _;
      }
    });
    setSelectedTimeSlots(updated);
  };

  const handleSelectDay = day => {
    if (selectedDay.includes(day)) {
      setSelectedDay(selectedDay.filter(_ => _ !== day));
    } else {
      setSelectedDay(prev => [...prev, day]);
    }
  };

  const handleConfirmClick = () => {
    const daysToAdd = { days: selectedDay };
    dispatch(addAvailableDays(daysToAdd));
    const daysToRemove = daysOfWeek.filter(_ => !selectedDay.includes(_));
    dispatch(removeAvailableDays({ days: daysToRemove }));

    // time slot
  };

  const removeSlot = itm => {
    const removed = selectedTimeSlots.filter(_ => _.id !== itm.id);
    setSelectedTimeSlots(removed);
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
          <View style={{ marginLeft: 0 }}>
            <Header title={'Manage Booking slots'} backBtn />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.heading}>Booking Slots</Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.robo_reg,
            color: '#67718C',
            marginLeft: widthToDp(4),
            marginRight: widthToDp(25),
          }}>
          It's very important that you set your daily available timings so your clients can book you as per your
          availability.
        </Text>
        <Text
          style={{
            marginHorizontal: widthToDp(4),
            textTransform: 'uppercase',
            color: theme.greyText,
            paddingVertical: 8,
            marginTop: 5,
            fontFamily: fonts.hk_bold,
          }}>
          Select Day
        </Text>

        <View style={styles.daysOfWeekContainer}>
          {daysOfWeek.map((day, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectDay(day)}
              style={[styles.dayOfWeekButton, selectedDay.includes(day) && styles.selectedDayButton]}>
              <Text style={[styles.dayOfWeekText, selectedDay.includes(day) && styles.selectedDayText]}>
                {day?.slice(0, 2)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.timeSlot}>
          <Text
            style={{
              fontFamily: fonts.hk_bold,
              color: '#67718C',
            }}>
            YOUR TIME SLOTS
          </Text>
          <Text
            style={{
              fontFamily: fonts.hk_bold,
              color: '#67718C',
            }}>
            ACTIVE
          </Text>
        </View>

        {/* time slot */}
        {selectedTimeSlots?.map(item => {
          return (
            <View style={{ marginBottom: 12 }}>
              <View style={styles.timeSlotContent}>
                <Text
                  style={{
                    ...styles.time,
                    backgroundColor: item.is_active ? theme.primary : 'white',
                    color: item.is_active ? '#ffffff' : '#000000',
                  }}>
                  {item.start_time} - {item.end_time}
                </Text>
                <View style={styles.active}>
                  <TouchableOpacity>
                    <Feather
                      name="x"
                      size={18}
                      color="black"
                      style={{ paddingHorizontal: widthToDp(4), paddingTop: 10, paddingBottom: 6 }}
                      onPress={() => removeSlot(item)}
                    />
                  </TouchableOpacity>
                  <View style={styles.switchContainer}>
                    <ToggleSwitch
                      isOn={item.is_active}
                      style={{ height: 20, marginRight: 10 }}
                      value={item.is_active}
                      onColor="#84668C"
                      offColor="#9A9A9A"
                      size="small"
                      onToggle={e => handleIsActive(item, e)}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        })}

        {showNewSlot && (
          <View style={styles.newSlotContainer}>
            <TextInput
              style={styles.input}
              placeholder="00:00"
              value={newSlotStart}
              placeholderTextColor={theme.greyText}
              onChangeText={text => setNewSlotStart(text)}
            />
            <Text style={{ color: theme.greyText }}>to</Text>
            <TextInput
              style={styles.input}
              placeholder="24:00"
              value={newSlotEnd}
              placeholderTextColor={theme.greyText}
              onChangeText={text => setNewSlotEnd(text)}
            />
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity onPress={toggleTimePeriod}>
                <Image source={arrowupcolor} style={{ width: 12, height: 8, marginLeft: 5 }} />
              </TouchableOpacity>
              <Text style={{ paddingVertical: 5, color: theme.greyText }}>{timePeriod}</Text>
              <TouchableOpacity onPress={toggleTimePeriod}>
                <Image source={arrowdowncolor} style={{ width: 12, height: 8, marginLeft: 5 }} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Feather
                name="x"
                size={24}
                color="#73C6F9"
                style={{ paddingHorizontal: widthToDp(4), paddingTop: 10 }}
                onPress={() => setShowNewSlot(false)}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Feather
                name="check"
                size={24}
                color="#73C6F9"
                style={{ paddingHorizontal: widthToDp(4), paddingTop: 10 }}
                onPress={handleAddNewSlot}
              />
            </TouchableOpacity>
          </View>
        )}
        {!showNewSlot && (
          <TouchableOpacity onPress={() => setShowNewSlot(true)}>
            <Text style={styles.btnnew}>+ Add a new Time slot</Text>
          </TouchableOpacity>
        )}
        <View style={styles.btn}>
          <Button title="Confirm" onPress={handleConfirmClick} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistBookingSlots;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(2),
  },
  time: {
    color: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btn: { marginTop: 15 },
  daysOfWeekContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
    marginHorizontal: widthToDp(4),
    marginTop: heightToDp(2),
    width: widthToDp(92),
    height: 70,
    borderRadius: 10,
  },
  timeSlotContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginHorizontal: widthToDp(4),
  },
  active: { flexDirection: 'row', alignItems: 'center' },
  btnnew: {
    marginHorizontal: widthToDp(4),
    marginVertical: heightToDp(3),
    fontFamily: fonts.sans_reg,
    color: '#677790',
  },
  dayOfWeekButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  selectedDayButton: {
    backgroundColor: theme.primary,
    borderColor: theme.primary,
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  dayOfWeekText: {
    fontSize: 12,
    lineHeight: 16,
    color: '#0F2851',
    fontFamily: fonts.hk_bold,
  },
  selectedDayText: {
    color: 'white',
  },
  newSlotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  timeSlot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(4),
    marginVertical: 15,
  },
  input: {
    backgroundColor: '#EEEEEE',
    width: 50,
    borderRadius: 10,
    marginHorizontal: widthToDp(4),
    color: theme.darkBlack,
  },
});
