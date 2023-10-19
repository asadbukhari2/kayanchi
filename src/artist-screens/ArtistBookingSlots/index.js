import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Switch, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { height, heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import back from '../../assets/back.png';
import arrowupcolor from '../../assets/arrowupcolor.png';
import arrowdowncolor from '../../assets/arrowdowncolor.png';
import ImageCropPicker from 'react-native-image-crop-picker';
import ToggleSwitch from 'toggle-switch-react-native';

const theme = useTheme();

const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const ArtistBookingSlots = props => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [image, setImage] = useState();
  const [isPrivate, setIsPrivate] = useState(false);
  const [timePeriod, setTimePeriod] = useState('AM');
  const [showNewSlot, setShowNewSlot] = useState(false);
  const [newSlotStart, setNewSlotStart] = useState('');
  const [newSlotEnd, setNewSlotEnd] = useState('');
  const [isActive, setIsActive] = useState(false); // State to track the switch

  const handleActiveSlot = value => {
    setIsActive(value);
  };

  const handleAddNewSlot = () => {
    if (newSlotStart && newSlotEnd) {
      setSelectedTimeSlots([...selectedTimeSlots, `${newSlotStart}-${newSlotEnd} ${timePeriod}`]);
      setNewSlotStart('');
      setNewSlotEnd('');
      setShowNewSlot(false);
    }
  };

  const toggleTimePeriod = () => {
    setTimePeriod(timePeriod === 'AM' ? 'PM' : 'AM');
  };

  const handlePrivateImage = () => {
    setIsPrivate(previousState => !previousState);
  };

  const handleTimeSlotToggle = timeSlot => {
    if (selectedTimeSlots.includes(timeSlot)) {
      setSelectedTimeSlots(selectedTimeSlots.filter(slot => slot !== timeSlot));
    } else {
      setSelectedTimeSlots([...selectedTimeSlots, timeSlot]);
    }
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
          {/* <Image source={back} /> */}
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
              onPress={() => setSelectedDay(day)}
              style={[styles.dayOfWeekButton, selectedDay === day && styles.selectedDayButton]}>
              <Text style={[styles.dayOfWeekText, selectedDay === day && styles.selectedDayText]}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.timeSlot}>
          <Text
            style={{
              fontFamily: fonts.hk_bold,
              color: '#67718C',
            }}>
            Your Time Slots
          </Text>
          <Text
            style={{
              fontFamily: fonts.hk_bold,
              color: '#67718C',
            }}>
            Active
          </Text>
        </View>

        {/* time slot */}
        <View style={styles.timeSlotContent}>
          <Text
            style={{
              ...styles.time,
              backgroundColor: isPrivate ? theme.primary : 'white',
              color: isPrivate ? '#ffffff' : '#000000',
            }}>
            7:30-8:30 PM
          </Text>
          {/* <Text style={styles.time}>7:30-8:30 PM</Text> */}
          <View style={styles.active}>
            <TouchableOpacity>
              <Feather name="x" size={24} color="black" style={{ paddingHorizontal: widthToDp(4), paddingTop: 10 }} />
            </TouchableOpacity>
            <View style={styles.switchContainer}>
              <ToggleSwitch
                isOn={isPrivate}
                style={{ height: 20, marginRight: 10 }}
                value={isPrivate}
                onColor="#84668C"
                offColor="#9A9A9A"
                size="small"
                onToggle={handlePrivateImage}
              />
            </View>
          </View>
        </View>

        {showNewSlot && (
          <View style={styles.newSlotContainer}>
            <TextInput
              style={styles.input}
              placeholder="00:00"
              value={newSlotStart}
              onChangeText={text => setNewSlotStart(text)}
            />
            <Text>to</Text>
            <TextInput
              style={styles.input}
              placeholder="00:00"
              value={newSlotEnd}
              onChangeText={text => setNewSlotEnd(text)}
            />
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity onPress={toggleTimePeriod}>
                <Image source={arrowupcolor} style={{ width: 12, height: 8, marginLeft: 5 }} />
              </TouchableOpacity>
              <Text style={{ paddingVertical: 5 }}>{timePeriod}</Text>
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

        <TouchableOpacity onPress={() => setShowNewSlot(true)}>
          <Text style={styles.btnnew}>+ Add a new Time slot</Text>
        </TouchableOpacity>

        <View style={styles.btn}>
          <Button title="Confirm" />
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
    paddingTop: heightToDp(7),
  },
  time: {
    // backgroundColor: theme.primary,
    color: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  btn: { marginTop: 15 },
  daysOfWeekContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(2),
    marginHorizontal: widthToDp(4),
    marginTop: heightToDp(2),
    width: widthToDp(92),
    paddingVertical: 15,
    borderRadius: 10,
  },
  timeSlotContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,

    // borderWidth: 1,
    // borderColor: '#0F2851',
  },
  selectedDayButton: {
    backgroundColor: theme.primary,
    borderColor: theme.primary,
    borderRadius: 30,
  },
  dayOfWeekText: {
    fontSize: 12,
    color: '#0F2851',
    fontFamily: fonts.hk_bold,
  },
  selectedDayText: {
    color: 'white',
  },
  newSlotContainer: { flexDirection: 'row', alignItems: 'center' },
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
  },
});
