import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

import arrowupcolor from '../../assets/arrowupcolor.png';
import arrowdowncolor from '../../assets/arrowdowncolor.png';
import { Modal } from 'react-native'

import ToggleSwitch from 'toggle-switch-react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBookingSlot,
  deleteBookingSlot,

  toogleBookingSlots,
  updateBookingSlot,
} from '../../redux/actions';
import makeStyle from './artistBookingSlots.styles';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ArtistBookingSlots = () => {
  // this is for the data come from the database it shows all the set the user selected days
  const [selectedDay, setSelectedDay] = useState([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);

  const [selectedDayTimeSlots, setSelectedDayTimeSlots] = useState([])
  const [selectDay, setDay] = useState("")
  const [slotsToToggle, setSlotsToToggle] = useState([]);
  const [slotsToRemove, setSlotsToRemove] = useState([]);
  const [slotsToCreate, setSlotsToCreate] = useState([]);

  const [updateBookingSlotId, setUpdateBookingSlotId] = useState("")
  const [timePeriod, setTimePeriod] = useState('AM');
  const [showNewSlot, setShowNewSlot] = useState(false);
  const [newSlotStart, setNewSlotStart] = useState('');
  const [newSlotEnd, setNewSlotEnd] = useState('');
  // const [newSlotStartH, setNewSlotStart] = useState('');
  const [showModal, setShowModal] = useState(false);

  const theme = useTheme();
  console.log('this is the theme', theme);
  const styles = makeStyle(theme);

  const dispatch = useDispatch();

  const { availableDays, bookingSlots } = useSelector(state => state.common);

  console.log('this is the selectedTimeSlots', selectedTimeSlots);
  useEffect(() => {
    setSelectedDay(Object.keys(bookingSlots));
    const allBookings = Object.values(bookingSlots).flat();
    console.log('this is the all booking', allBookings);
    // Finding unique items based on the combination of start_time and artist_id
    // const uniqueArray = Array.from(
    //   new Map(allBookings.map((item) => [`${item.start_time}-${item.artist_id}`, item])).values()
    // );
    if (bookingSlots[selectDay]) {

      setSelectedTimeSlots(bookingSlots[selectDay]);
    } else {
      setSelectedTimeSlots([])
    }
    // console.log('this is the map', uniqueArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingSlots, selectDay]);

  const handleAddNewSlot = () => {
    setSlotsToCreate(prev => [
      ...prev,
      {
        start_time: `${newSlotStart} ${timePeriod}`,
        end_time: `${newSlotEnd} ${timePeriod}`,
      },
    ]);
    if (newSlotStart && newSlotEnd) {
      setSelectedTimeSlots([
        ...selectedTimeSlots,
        {
          start_time: `${newSlotStart} ${timePeriod}`,
          end_time: `${newSlotEnd} ${timePeriod}`,
          is_active: true,
        },
      ]);
      // setNewSlotStart('');
      // setNewSlotEnd('');
      setShowNewSlot(false);
    }
  };

  const toggleTimePeriod = () => {
    setTimePeriod(timePeriod === 'AM' ? 'PM' : 'AM');
  };

  const handleIsActive = (itm, e) => {
    setSlotsToToggle(prev => {
      const existingIndex = prev.findIndex(item => item.id === itm.group);

      if (existingIndex !== -1) {
        const updatedArray = [...prev];
        updatedArray.splice(existingIndex, 1);
        return updatedArray;
      } else {
        return [...prev, { id: itm.group, status: e }];
      }
    });
    const updated = selectedTimeSlots.map(_ => {
      if (_.id === itm.id) {
        return {
          ..._,
          is_active: e,
        };
      } else {
        return _;
      }
    });
    let newStatus = {
      status: !itm.is_active
    }
    dispatch(toogleBookingSlots(itm.id, newStatus));
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
    const newSlots = { day: selectDay, start_time: `${newSlotStart} ${timePeriod}`, end_time: `${newSlotEnd} ${timePeriod}` };
    console.log('this is the new days', newSlots);
    dispatch(addBookingSlot(newSlots));
    setNewSlotStart('');
    setNewSlotEnd('');
    // const daysToRemove = daysOfWeek.filter(_ => !selectedDay.includes(_));
    // dispatch(removeAvailableDays({ days: daysToRemove }));

    // slotsToToggle.length > 0 &&
    //   slotsToToggle.forEach(_ => {
    //     dispatch(toogleBookingSlot(_.id, { status: _.status }));
    //     setSlotsToToggle([]);
    //   });

    // slotsToRemove.length > 0 &&
    //   slotsToRemove.forEach(_ => {
    //     dispatch(removeBookingSlot(_));
    //     setSlotsToRemove([]);
    //   });

    // time slot
  };

  const handelRemoveSlot = async (id) => {
    console.log('remove this time slot', id);
    try {

      dispatch(deleteBookingSlot(id));
    } catch (error) {

    }
  };

  const handelTimeSlotUpdate = (id, startTime, endTime) => {
    let newData = {
      start_time: `${startTime} ${timePeriod}`,
      end_time: `${endTime} ${timePeriod}`
    }
    dispatch(updateBookingSlot(id, newData));
    setShowModal(!showModal)
  }
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
              key={day}
              onPress={() => {
                // handleSelectDay(day)
                setDay(day)
              }}
              style={[styles.dayOfWeekButton, day === selectDay ? styles.selectedDayButton : selectedDay.includes(day) && styles.highLightDayButton]}>
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
            <View style={{ marginBottom: 12 }} key={item.id}>
              <TouchableOpacity style={styles.timeSlotContent} onPress={() => {
                setNewSlotStart(item.start_time);
                setUpdateBookingSlotId(item.id)
                setNewSlotEnd(item.end_time);
                setShowModal(!showModal);
              }}>
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
                      onPress={() => handelRemoveSlot(item.id)}
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
              </TouchableOpacity>
            </View>
          );
        })}

        {showNewSlot && (
          <View style={styles.newSlotContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
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
          </View>
        )}
        {!showNewSlot && (
          <TouchableOpacity onPress={() => setShowNewSlot(true)}>
            <Text style={styles.btnnew}>+ Add Slot</Text>
          </TouchableOpacity>
        )}
        <View style={styles.btn}>
          <Button title="Confirm" onPress={handleConfirmClick} />
        </View>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modal}>
            <View style={styles.newSlotContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
              </View>


            </View>
            <View style={styles.modalButtonContainer} >
              <TouchableOpacity style={styles.modalButton} onPress={() => {
                setShowModal(!showModal)
              }}>
                <Text style={styles.textWhite}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton]} onPress={() => {
                handelTimeSlotUpdate(updateBookingSlotId, newSlotStart, newSlotEnd);
              }}>
                <Text style={styles.textWhite}>Update</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistBookingSlots;
