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
import { RadioButton } from 'react-native-paper';
import makeStyle from './artistLanguage.style';

const theme = useTheme();

const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const ArtistLanguage = props => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [checked, setChecked] = useState('first');
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [image, setImage] = useState();
  const [isPrivate, setIsPrivate] = useState(false);
  const [timePeriod, setTimePeriod] = useState('AM');
  const [showNewSlot, setShowNewSlot] = useState(false);
  const [newSlotStart, setNewSlotStart] = useState('');
  const [newSlotEnd, setNewSlotEnd] = useState('');
  const [isActive, setIsActive] = useState(false); // State to track the switch
  const styles = makeStyle(theme)
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
            <Header backBtn />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.heading}>Language</Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: '#333333',
            fontFamily: fonts.robo_reg,
            marginLeft: widthToDp(4),
            marginRight: widthToDp(23),
            marginTop: 12,
          }}>
          We at Kyanchi want you to understand us better
        </Text>

        <Text
          style={{
            marginHorizontal: widthToDp(4),
            paddingVertical: 8,
            color: '#677790',
            fontFamily: fonts.sans_reg,
          }}>
          Choose your prefered language
        </Text>
        <View style={styles.daysOfWeekContainer}>
          <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <RadioButton value="first" />
              <Text style={{ color: theme.lightBlack, fontFamily: fonts.hk_bold }}>English</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <RadioButton value="second" />
              <Text style={{ color: theme.lightBlack, fontFamily: fonts.hk_bold }}>Urdu</Text>
            </View>
          </RadioButton.Group>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistLanguage;


